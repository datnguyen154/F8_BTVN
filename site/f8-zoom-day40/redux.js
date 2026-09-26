export function createStore(reducer, preloadedState) {
    let state = preloadedState;
    let listeners = [];

    function getState() {
        return state;
    }

    function dispatch(action) {
        state = reducer(state, action);

        listeners.forEach((listener) => {
            listener();
        });

        return action;
    }

    function subscribe(listener) {
        listeners.push(listener);

        return function unsubscribe() {
            listeners = listeners.filter(
                (currentListener) => currentListener !== listener,
            );
        };
    }

    dispatch({ type: "@@redux/INIT" });

    return {
        getState,
        dispatch,
        subscribe,
    };
}
