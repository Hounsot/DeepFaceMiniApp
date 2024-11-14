import React, { useState } from 'react';
import axios from 'axios';
import WelcomeScreen from './components/WelcomeScreen';
import NameForm from './components/NameForm';
import PortfolioForm from './components/PortfolioForm';
import CompanyForm from './components/CompanyForm';
import SuccessMessage from './components/SuccessMessage';
import './App.css';

const App = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});
  const [queuePosition, setQueuePosition] = useState(null);
  const [isClassAdded, setIsClassAdded] = useState(false);

  const handleContinue = (data) => {
    setFormData((prevData) => ({ ...prevData, ...data }));
    setStep((prevStep) => prevStep + 1);
  };

  const handleAddClass = () => {
    setIsClassAdded(true);
  };

const handleSubmit = async (data) => {
  // Combine formData with the new company data
  const updatedFormData = { ...formData, ...data };

  const finalData = {
    name: updatedFormData.name || '',
    surname: updatedFormData.surname || '',
    portfolio_link: updatedFormData.portfolio_link || '',
    company: updatedFormData.company || '',
  };

  console.log("Final data being sent:", finalData);

  try {
    const response = await axios.post('https://zaum.xyz/api/users', { user: finalData });
    setQueuePosition(response.data.message);
    setStep((prevStep) => prevStep + 1);
  } catch (error) {
    console.error("Error submitting form", error);
  }
};
  return (
    <div className="App">
      <div className="W_DeepFaceAndNickname"> 
        <img src={`${process.env.PUBLIC_URL}/DeepFaceBlack.png`} className="A_DeepFace" alt="Deep Face" /> 
        <img src={`${process.env.PUBLIC_URL}/DeepFaceGreen.png`} className={`A_DeepFace U_Finished ${step === 5 ? 'U_Active' : ''}`} alt="Deep Face"
        />
        <h2 className={`A_Title U_Secondary ${isClassAdded ? 'new-class' : ''}`}>Привет, Николай</h2>
      </div>
      <div className="A_Background"></div>
      {step === 1 && <WelcomeScreen onContinue={() => { setStep(2); handleAddClass(); }} />}
      {step === 2 && <NameForm onContinue={handleContinue} />}
      {step === 3 && <PortfolioForm onContinue={handleContinue} />}
      {step === 4 && <CompanyForm onContinue={handleSubmit} />}
      {step === 5 && <SuccessMessage position={queuePosition} />}
    </div>
  );
};

export default App;
