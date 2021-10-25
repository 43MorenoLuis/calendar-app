import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { roorReducer } from "../reducers/rootReducer";

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


export const store = createStore(
    roorReducer,
    composeEnhancers(
        applyMiddleware(thunk)
    )
);