import {createReducer} from "@reduxjs/toolkit";
import {depositAction, withdrawAction} from "../actions/accountActions";

const initialState = {
    balance: 0
}

const accountReducer = createReducer(initialState, {
    [depositAction] : (state, action) => {
        if (action.payload<0)
            state.balance=state.balance
        else
        state.balance = state.balance+action.payload
    },
    [withdrawAction] : (state, action) =>{
        if (state.balance>0)
            state.balance = state.balance-action.payload
    }
})

export default accountReducer
