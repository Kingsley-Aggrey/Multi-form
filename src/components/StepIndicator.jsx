import React from 'react'

const StepIndicator = ({ num, active, title }) => {
    return (
        <div className="step">
            <div className={`num ${active ? "active-nav" : ""}`}>
                <span>{num}</span>
            </div>
            <div className="detail">
                <p>Step {num}</p>
                <h4>{title}</h4>
            </div>
        </div>
    )
}

export default StepIndicator