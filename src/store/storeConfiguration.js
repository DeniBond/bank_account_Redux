import accountReducer from "../reducers/accountReducer";
//import {applyMiddleware, createStore} from "redux";
import {logger} from "redux-logger/src";
//import thunk from "redux-thunk";
import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import {quoteReducer} from "../reducers/quoteReducer";

const initialState = {
}
// deprecated потому что рекомендуют пользоваться reduxToolkit
// Для работы enhancer необходимо передать его в store с помощью applyMiddleware
// const store = createStore(accountReducer, initialState, applyMiddleware(thunk, logger))

const store = configureStore({
    reducer: {
        message: quoteReducer,
        account: accountReducer
    },
    middleware: getDefaultMiddleware().concat(logger)
})

export default store;