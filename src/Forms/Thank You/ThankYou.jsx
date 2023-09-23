import React from 'react'
import "./thankYou.css"
import FormBase from '../Form'

const ThankYou = () => {
    return (
        <div className="contents con form">
            <img src="./images/icon-thank-you.svg" alt="icon" />
            <h2>Thank you</h2>
            <p id='txt'>
                Thanks for confirming your subscription! We Hope you have fun using our platorm.
                If you ever need support,
                please feel free to email us at support@loremgaming.com.
            </p>
        </div>
    )
}

export default ThankYou