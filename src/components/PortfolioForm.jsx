import React, { useState } from 'react';
import Button from './Button';

const PortfolioForm = ({ onContinue }) => {
  const [portfolioLink, setPortfolioLink] = useState('');
  const isValidPortfolioLink = (link) => {
    return link.trim().startsWith("https://portfolio.hse.ru/Student");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onContinue({ portfolio_link: portfolioLink }); // Pass portfolio link as value
  };
  const isLinkValid = isValidPortfolioLink(portfolioLink);
  return (
    <form className="O_Form" onSubmit={handleSubmit}>
      <label className="M_FormItem">
        <h1 className="A_Title U_Primary">Ссылка на портфолио ВШЭ</h1>
        <input 
          className="A_Input" 
          placeholder="https://portfolio.hse.ru/Student/17647"
          type="url" // Changed to "url" for better validation of links
          value={portfolioLink}
          onChange={(e) => setPortfolioLink(e.target.value)}
          required // Add "required" if you want to make the field mandatory
        />
      </label>
            {/* Display error message if the link is invalid and not empty */}
            {!isLinkValid && portfolioLink.length > 0 && (
        <p className="A_Description">
          Возможно, ты неправильно указал ссылку на портфолио. Она должна заканчиваться твоим айдишником как в примере
        </p>
      )}
      <Button variant="primary" disabled={!isLinkValid}>Продолжить</Button>
    </form>
  );
};

export default PortfolioForm;
