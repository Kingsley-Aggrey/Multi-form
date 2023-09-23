import { useState } from 'react';
import './App.css';
import { StepIndicator } from './components';
import { Step1, Step2, Step3, Step4, ThankYou } from './Forms';

function App() {
  const [currentActiveStep, setCurrentActiveStep] = useState(1);
  const [Info, setInfo] = useState({})
  const [confirmed, setConfirmed] = useState(false)

  return (
    <main>
      <div className="container">
        <div className="steps">
          <StepIndicator num={1} title={"Your Info"} active={currentActiveStep === 1 ? true : false} />
          <StepIndicator num={2} title={"Select Plan"} active={currentActiveStep === 2 ? true : false} />
          <StepIndicator num={3} title={"Add-Ons"} active={currentActiveStep === 3 ? true : false} />
          <StepIndicator num={4} title={"Summary"} active={currentActiveStep === 4 ? true : false} />

        </div>
        {
          currentActiveStep === 1 && <Step1
            currentActiveStep={currentActiveStep}
            setCurrentActiveStep={setCurrentActiveStep}
            Info={Info}
            setInfo={setInfo}
          />
        }

        {
          currentActiveStep === 2 && <Step2
            currentActiveStep={currentActiveStep}
            setCurrentActiveStep={setCurrentActiveStep}
            Info={Info}
            setInfo={setInfo}
          />
        }

        {
          currentActiveStep === 3 && <Step3
            currentActiveStep={currentActiveStep}
            setCurrentActiveStep={setCurrentActiveStep}
            Info={Info}
            setInfo={setInfo}
          />
        }

        {
          (currentActiveStep === 4 && !confirmed) && <Step4
            currentActiveStep={currentActiveStep}
            setCurrentActiveStep={setCurrentActiveStep}
            Info={Info}
            setInfo={setInfo}
            setConfirmed={setConfirmed}
          />
        }

        {
          confirmed && <ThankYou confirmed={confirmed} />
        }
      </div>
    </main>
  );
}

export default App;
