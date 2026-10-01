import { applyMiddleware, combineReducers, compose, createStore } from "redux";

import { thunk } from "redux-thunk";
import { createLogger } from "redux-logger";

import { reducer as productReducer } from "./product";
import { reducer as uiReducer } from "./ui";

const rootReducer = combineReducers({
    product: productReducer,
    ui: uiReducer,
});

const middlewares = [thunk];

if (import.meta.env.DEV) {
    middlewares.push(createLogger());
}

const store = createStore(
    rootReducer,
    compose(applyMiddleware(...middlewares)),
);

export default store;
