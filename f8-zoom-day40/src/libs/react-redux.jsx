/* eslint-disable react-refresh/only-export-components */

import { createContext, useContext, useEffect, useState } from "react";

const StoreContext = createContext(null);

export function Provider({ store, children }) {
    return (
        <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
    );
}

export function useStore() {
    const store = useContext(StoreContext);

    if (!store) {
        throw new Error("useStore must be used inside Provider");
    }

    return store;
}

export function useDispatch() {
    const store = useStore();

    return store.dispatch;
}

export function useSelector(selector) {
    const store = useStore();

    const [selectedValue, setSelectedValue] = useState(() =>
        selector(store.getState()),
    );

    useEffect(() => {
        const checkForUpdates = () => {
            const newSelectedValue = selector(store.getState());

            setSelectedValue((currentValue) => {
                if (Object.is(currentValue, newSelectedValue)) {
                    return currentValue;
                }

                return newSelectedValue;
            });
        };

        checkForUpdates();

        const unsubscribe = store.subscribe(checkForUpdates);

        return unsubscribe;
    }, [store, selector]);

    return selectedValue;
}
