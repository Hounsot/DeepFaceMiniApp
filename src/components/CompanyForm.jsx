import React, { useState } from 'react';
import Button from './Button';

const CompanyForm = ({ onContinue }) => {
  const [companyName, setCompanyName] = useState('');

  const handleContinue = () => {
    onContinue({ company: companyName });
  };

  const handleSkip = () => {
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
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
        />
      </label>
      <p className="A_Description">Это последний вопрос, правда</p>
        <Button variant="secondary" onClick={handleSkip}>Я пока не работаю</Button>
        <Button variant="primary" onClick={handleContinue}>Продолжить</Button>
    </div>
  );
};

export default CompanyForm;
