import React, { useEffect, useState } from 'react'
import FormBase from '../Form'
import "./step2.css"

const Step2 = ({ currentActiveStep, setCurrentActiveStep, Info, setInfo }) => {
    const [toggle, setToggle] = useState(false)
    const [currenData, setCurrenData] = useState([])
    const [selectedPlan, setSelectedPlan] = useState({})
    const [error, setError] = useState(false)

    const Plans = {
        MonthlyPlans: [
            {
                title: "Arcade",
                icon: "images/icon-arcade.svg",
                price: 9
            },
            {
                title: "Advanced",
                icon: "images/icon-advanced.svg",
                price: 12
            },
            {
                title: "Pro",
                icon: "images/icon-pro.svg",
                price: 15
            }
        ],
        YearlyPlans: [
            {
                title: "Arcade",
                icon: "images/icon-arcade.svg",
                price: 9,
                freeOffer: "2 Months free"
            },
            {
                title: "Advanced",
                icon: "images/icon-advanced.svg",
                price: 12,
                freeOffer: "2 Months free"
            },
            {
                title: "Pro",
                icon: "images/icon-pro.svg",
                price: 15,
                freeOffer: "2 Months free"
            }
        ]
    }

    const Selected = (e, plan) => {
        const list = document.querySelectorAll(".card")

        list?.forEach(element => {
            element.classList.remove("cardActive")
        })

        e.currentTarget.classList.add("cardActive")

        setSelectedPlan({
            planType: toggle ? "Yearly" : "Monthly",
            planDetail: {
                ...plan
            }
        });
    }

    useEffect(() => {
        setCurrenData(Plans.MonthlyPlans)

        if (Info.selectedPlan?.planType === "Monthly") {
            setCurrenData(Plans.MonthlyPlans);
            setSelectedPlan({ ...Info.selectedPlan })
            setToggle(false);
        }
        else if (Info.selectedPlan?.planType === "Yearly") {
            setCurrenData(Plans.YearlyPlans)
            setSelectedPlan({ ...Info.selectedPlan })

            setToggle(true);
        }
    }, [])

    return (
        <FormBase
            title={"Select your plan"}
            subTitle={"Your have the option of monthly or yearly billing"}
            currentActiveStep={currentActiveStep}
            setCurrentActiveStep={setCurrentActiveStep}
            data={{ selectedPlan }}
            erroMsgs={{
                setError,
            }}
            setInfo={setInfo}
            Info={Info}
        >
            <div className="step2">
                {currenData.map((plan) => (<div key={plan.title} className={`card ${selectedPlan.planDetail
                    ?.title === plan.title ? "cardActive" : ""}`} onClick={(e) => Selected(e, plan)}>
                    <img src={plan.icon} alt={plan.title} />
                    <div className="info">
                        <h3>{plan.title}</h3>
                        <p>${plan.freeOffer ? plan.price * 10 : plan.price}/{plan.freeOffer ? "yr" : "mo"}</p>
                        {plan.freeOffer && <p className='bold_blue'>{plan.freeOffer}</p>}
                    </div>
                </div>))}
            </div>

            <div className="toggler">
                <p className={!toggle ? "bold_blue" : ""}>Monthly</p>
                <div className="tBoder">
                    <div className={`t ${toggle ? "toggle" : ""}`} onClick={() => {
                        setToggle(!toggle)
                        if (!toggle) setCurrenData(Plans.YearlyPlans)
                        else setCurrenData(Plans.MonthlyPlans)
                    }}>

                    </div>
                </div>
                <p className={toggle ? "bold_blue" : ""}>Yearly</p>
            </div>
            <p className='err' id='margin_top'>{error ? "Please Select a Plan" : ""}</p>
        </FormBase>
    )
}

export default Step2