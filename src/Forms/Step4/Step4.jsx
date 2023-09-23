import React from 'react'
import FormBase from '../Form'
import "./step4.css"

const Step4 = ({ currentActiveStep, setCurrentActiveStep, Info, setInfo, setConfirmed }) => {
    let total = Info.selectedPlan.planDetail.price

    Info.Add_Ons.forEach(add_On => {
        const price = Info.selectedPlan.planType === "Monthly" ? add_On.price : add_On.price * 10
        total = total + price
    });

    return (
        <FormBase
            title={"Finishing up"}
            subTitle={"Double-check everything looks OK before confirming."}
            currentActiveStep={currentActiveStep}
            setCurrentActiveStep={setCurrentActiveStep}
            data={{ setConfirmed }}
            erroMsgs={{
            }}
            btName={"Confirm"}
            setInfo={setInfo}
            Info={Info}
        >
            <div className="step4">
                <div className="plan">
                    <div className="fnsh_Info">
                        <h4>{Info.selectedPlan.planDetail.title} ({Info.selectedPlan.planType})</h4>
                        <p onClick={() => setCurrentActiveStep(2)}>Change</p>
                    </div>
                    <h4>${Info.selectedPlan.planDetail.price}</h4>
                </div>
                <hr />
                {
                    Info.Add_Ons?.map(add_On => (
                        <div key={add_On.title} className="add_on">
                            <p>{add_On.title}</p>
                            <p className='price'>
                                +${Info.selectedPlan.planType === "Monthly" ? add_On.price : add_On.price * 10}/
                                {Info.selectedPlan.planType === "Monthly" ? "mo" : "yr"}</p>
                        </div>
                    )
                    )
                }

            </div>
            <div className="total">
                <p>Total (per {Info.selectedPlan.planType === "Monthly" ? "month" : "year"})</p>
                <h3>${total}/{Info.selectedPlan.planType === "Monthly" ? "mo" : "yr"}</h3>
            </div>
        </FormBase>
    )
}

export default Step4