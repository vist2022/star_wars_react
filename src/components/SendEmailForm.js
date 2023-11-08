import React, {Component, useContext, useState} from 'react';
import {contextStarWars} from "../utils/contextStarWars";

const SendEmailForm = () => {

    const {changePage} = useContext(contextStarWars)
    const [inputData, setInputData] = useState({
        email: '',
        message: '',
    })

    const handleChangeEmailInput = e => setInputData({...inputData, email: e.target.value});

    const handleChangeMessageText = e => setInputData({...inputData, message: e.target.value})

    const handleOnClickSend = () => {
        alert(`Sending email from ${inputData.email} with message ${inputData.message}`)
        changePage('Home');
    }
    return (

        <div className={'container w-50'}>
            <div className="mb-3">
                <label htmlFor="emailInput" className="form-label">Email address</label>
                <input
                    type="email"
                    className="form-control w-50"
                    id="emailInput"
                    placeholder="name@example.com"
                    onChange={handleChangeEmailInput}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="messageText" className="form-label">Example textarea</label>
                <textarea
                    className="form-control"
                    id="messageText"
                    rows="6"
                    onChange={handleChangeMessageText}
                >
                    </textarea>
            </div>
            <button type="submit"
                    className="nav-item btn btn-danger border border-light rounded-pill mx-1 my-3 common-btn"
                    onClick={handleOnClickSend}>
                Send
            </button>
        </div>
    );
}

export default SendEmailForm;