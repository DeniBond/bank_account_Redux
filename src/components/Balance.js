import React from 'react';
import {useSelector} from "react-redux";

const Balance = () => {
    const balance = useSelector(state => state.account.balance);
    const message = useSelector(state => state.message)

    return (
        <div>
            <h1 className={'text-center text-uppercase'}>Bank</h1>

            <h2 className={'text-center text-uppercase'}>{message.quote || message.notification}</h2>

            <h3 className={'text-center text-uppercase'}>Balance: {balance}</h3>
        </div>
    );
};

export default Balance;