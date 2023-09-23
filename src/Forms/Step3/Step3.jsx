import React, { useEffect, useState } from 'react'
import FormBase from '../Form'
import "./step3.css"

const Step3 = ({ currentActiveStep, setCurrentActiveStep, Info, setInfo }) => {
    const [data, setData] = useState([])
    const Add_Ons = [
        {
            title: "Online service",
            info: "Access to multiplayer games",
            price: 1
        },
        {
            title: "Larger storage",
            info: "Extra 1TB of cloud save",
            price: 2
        },
        {
            title: "Customizable Profile",
            info: "Custom theme on your profile",
            price: 2
        }
    ]

    useEffect(() => {
        const addOnsDocs = document.querySelectorAll(".add_on")

        if (Info.Add_Ons?.length > 0) {
            Info.Add_Ons.forEach((ad_on) => {
                addOnsDocs.forEach((addOnsDoc) => {
                    if (addOnsDoc.children[0].children[1].children[0].textContent.toString() === ad_on.title) {
                        addOnsDoc.classList.add("activeAdd_on")
                        addOnsDoc.children[0].children[0].checked = true
                    }
                })
            })
            setData([...Info.Add_Ons])

        }
    }, [])

    return (
        <FormBase
            title={"Pick add-ons"}
            subTitle={"Add-ons helps enhance your gaming experience."}
            currentActiveStep={currentActiveStep}
            setCurrentActiveStep={setCurrentActiveStep}
            data={[...data]}
            erroMsgs={{
            }}
            setInfo={setInfo}
            Info={Info}
        >
            <div className="step3">
                {Add_Ons.map((add_on) => (
                    <div key={add_on.title} className="add_on" onClick={(e) => {
                        // e.currentTarget.classList.add("activeAdd_on")
                        e.currentTarget.children[0].children[0].checked = !e.currentTarget.children[0].children[0].checked

                        if (e.currentTarget.children[0].children[0].checked) {
                            e.currentTarget.classList.add("activeAdd_on")
                            setData(data?.length > 0 ? [...data, { ...add_on }] : [{ ...add_on }])
                        }
                        else {
                            let add_ = []
                            Info.Add_Ons.forEach((ad_on) => {
                                if (ad_on.title !== add_on.title) {
                                    add_.push(ad_on);
                                }
                            })

                            setData([...add_])
                            e.currentTarget.classList.remove("activeAdd_on")
                        }
                    }}>
                        <div>
                            <input type="checkbox" name="add_on" id="" value={""} />
                            <div className="add_on_detail">
                                <h4>{add_on.title}</h4>
                                <p>{add_on.info}</p>
                            </div>
                        </div>
                        <p>+${Info.selectedPlan.planType === "Monthly" ? add_on.price : add_on.price * 10}/{Info.selectedPlan.planType === "Monthly" ? "mo" : "yr"}</p>
                    </div>
                ))}
            </div>
        </FormBase>
    )
}

export default Step3