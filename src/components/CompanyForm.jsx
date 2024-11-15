import React, { useState } from 'react';
import Button from './Button';

const CompanyForm = ({ onContinue }) => {
  const [companyName, setCompanyName] = useState('');
  const [isDisabled, setIsDisabled] = useState(false); // New state to manage button disabling

  const handleContinue = () => {
    setIsDisabled(true); // Disable buttons upon click
    onContinue({ company: companyName });
  };

  const handleSkip = () => {
    setIsDisabled(true); // Disable buttons upon click
    onContinue({ company: 'Jobless' });
  };

  return (
    <div className="O_Form">
      <label className="M_FormItem">
        <h1 className="A_Title U_Primary">Место работы</h1>
        <input 
          className="A_Input" 
          placeholder="Введите название компании"
          type="text"
          required
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
        />
      </label>
      <p className="A_Description">Это последний вопрос, правда</p>
      <Button 
        variant="secondary" 
        onClick={handleSkip} 
        disabled={isDisabled} // Disable the button if isDisabled is true
      >
        Я пока не работаю
      </Button>
      <Button 
        variant="primary" 
        onClick={handleContinue} 
        disabled={isDisabled} // Disable the button if isDisabled is true
      >
        Продолжить
      </Button>
    </div>
  );
};

export default CompanyForm;
