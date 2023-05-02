import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    quote: 'Moscow never sleep',
    notification: ''
}

const quoteSlice = createSlice({
    name: 'message',
    initialState,
    reducers: {
        putQuoteAction: (message, action)=> {
            message.quote = action.payload || message.quote
        },
        quoteRequestAction: (message) => {
            // null only for actualization information
            message.quote = null
            message.notification = 'Loading...'
        },
        quoteErrorAction: (message)=> {
            message.quote = null
            message.notification = `Error, sorry`
        }
    }
})

const {actions, reducer} = quoteSlice;
export const quoteReducer = reducer;
export const {putQuoteAction, quoteRequestAction, quoteErrorAction} = actions;

export const getQuoteAction = () => {
    return (dispatch) => {
        dispatch(quoteRequestAction())
        fetch('http://api.kanye.rest/')
            .then(response => response.json())
            .then(data => dispatch(putQuoteAction(data.quote)))
            .catch(e => dispatch(quoteErrorAction(e)))
    }
}