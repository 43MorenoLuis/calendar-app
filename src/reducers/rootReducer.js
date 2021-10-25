import { combineReducers } from "redux";
import { uiReducer } from "./uiReducer";

export const roorReducer = combineReducers({
    ui: uiReducer,
})