import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {getQuoteAction, putQuoteAction} from "../reducers/quoteReducer";
import {depositAction, withdrawAction} from "../actions/accountActions";

const Operation = () => {
    const dispatch = useDispatch()
    const [sum, setSum] = useState()


    // function handleClickQuote() {
    //     fetch('http://api.kanye.rest')
    //         .then(response => {
    //             if (response.ok){
    //                 return response.json();
    //             } else {
    //                 throw new Error(' '+ response.status)
    //             }
    //         }).then(data => dispatch(putQuoteAction(data.quote)))
    // }

    return (
        <div className={'container'}>
            <div className={'d-flex justify-content-center'}>
                <button className={'btn btn-primary btn-lg'} onClick={() =>
                    dispatch(withdrawAction(sum))}>Withdraw
                </button>
                <input className={'form-control-lg text-center'} type={"number"}
                       defaultValue={0}
                       min={0}
                       onChange={(event) =>
                           setSum(+event.target.value)}
                       />
                <button className={'btn btn-primary btn-lg'} onClick={() => dispatch(depositAction(sum))}>Deposit</button>
            </div>
            <div className={'d-flex justify-content-center m-2'}>
                <button className={'btn btn-info btn-lg align-content-center'} onClick={()=> dispatch(getQuoteAction())}>Get quote</button>
            </div>
        </div>
    );
};

export default Operation;