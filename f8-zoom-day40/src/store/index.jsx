import { createStore } from "../libs/redux";
import taskReducer from "./reducers/taskReducer";

const store = createStore(taskReducer);

export default store;
