import React, { useEffect, useState } from 'react'
import FormBase from '../Form'
import "./step1.css"

const Step1 = ({ currentActiveStep, setCurrentActiveStep, Info, setInfo }) => {

    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')

    const [nameError, setNameError] = useState(false)
    const [emailError, setEmailError] = useState(false)
    const [phoneNumberError, setPhoneNumberError] = useState(false)

    useEffect(() => {
        if (Info.fullName !== undefined) setFullName(Info.fullName);
        if (Info.email !== undefined) setEmail(Info.email);
        if (Info.phoneNumber !== undefined) setPhoneNumber(Info.phoneNumber);
    }, [])

    return (
        <FormBase
            title={"Personal Info"}
            subTitle={"Please Provide your name, email address and phone number."}
            currentActiveStep={currentActiveStep}
            setCurrentActiveStep={setCurrentActiveStep}
            data={{
                fullName,
                email,
                phoneNumber
            }}
            erroMsgs={{
                setNameError,
                setEmailError,
                setPhoneNumberError
            }}
            setInfo={setInfo}
            Info={Info}
        >
            <div className='step1'>
                <div className="lable">
                    <label htmlFor="name">Name</label>
                    <span className='err'>{nameError ? "This field is required" : ""}</span>
                </div>
                <input type="text" id='name' name='name' placeholder='John Doe'
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className={nameError ? "error" : ""}
                />
                <div className="lable">
                    <label htmlFor="email">Email Address</label>
                    <span className='err'>{emailError ? "This field is required" : ""}</span>
                </div>
                <input type="email" id='email' name='email' placeholder='johndoe@gmail.com'
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={emailError ? "error" : ""}
                />
                <div className="lable">
                    <label htmlFor="number">Phone Number</label>
                    <span className='err'>{phoneNumberError ? "This field is required" : ""}</span>
                </div>
                <input type="tel" name="number" id="number" required placeholder='e.g. +233555556932'
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className={phoneNumberError ? "error" : ""}
                />
            </div>
        </FormBase>
    )
}

export default Step1