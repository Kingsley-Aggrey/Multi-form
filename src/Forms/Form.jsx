import React from 'react'

const FormBase = ({ title, subTitle, currentActiveStep, setCurrentActiveStep, data, erroMsgs, btName, children, Info, setInfo, confirmed }) => {
    const Submit = (e) => {
        e.preventDefault();
        if (currentActiveStep === 1) {
            if (data.fullName === "") {
                erroMsgs.setNameError(true)
            }

            if (data.email === "" || !data.email.includes("@")) {
                erroMsgs.setEmailError(true)
            }

            if (data.phoneNumber === "") {
                erroMsgs.setPhoneNumberError(true)
            }

            if (data.phoneNumber === "" || (data.email === "" || !data.email.includes("@")) || data.fullName === "") return;

            setInfo({ ...Info, fullName: data.fullName, email: data.email, phoneNumber: data.phoneNumber })
        }

        else if (currentActiveStep === 2) {
            if (JSON.stringify(data.selectedPlan).length === 2) {
                erroMsgs.setError(true)
                return
            }

            if (data.selectedPlan.planType === "Yearly") {
                let price = data.selectedPlan.planDetail.price;
                data.selectedPlan.planDetail.price = price * 10
            }

            setInfo({ ...Info, selectedPlan: { ...data.selectedPlan } })
        }

        else if (currentActiveStep === 3) {
            setInfo({ ...Info, Add_Ons: [...data] })
        }

        else if (currentActiveStep === 4) {
            data.setConfirmed(true)
        }

        if (currentActiveStep < 4) {
            const mm = currentActiveStep + 1
            setCurrentActiveStep(mm)
        }
    }


    const Back = (e) => {
        e.preventDefault();
        if (currentActiveStep === 1) return;
        let num = currentActiveStep;
        setCurrentActiveStep(num - 1)
    }

    return (
        <div className="form" id="form">
            <div className='contents'>
                <div className="title">
                    <h1>
                        {title}
                    </h1>
                    <p>
                        {subTitle}
                    </p>
                </div>
                {children}
            </div>

            {
                !confirmed &&
                <div className="btns">
                    <button className='bckBtn' onClick={(e) => Back(e)}>{currentActiveStep !== 1 ? "Go Back" : ""}</button>
                    <button className='ctBtn' onClick={(e) => Submit(e)}>{btName ? btName : "Next Step"}</button>
                </div>
            }
        </div>
    )
}

export default FormBase