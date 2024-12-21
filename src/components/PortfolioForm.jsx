import React, { useState } from 'react';
import Button from './Button';

const PortfolioForm = ({ onContinue }) => {
  const [portfolioLink, setPortfolioLink] = useState('');
  
  const isValidPortfolioLink = (link) => {
    const trimmedLink = link.trim();
    return (
      trimmedLink.startsWith("https://portfolio.hse.ru/Student") ||
      trimmedLink.startsWith("https://portfolio.hse.ru/User") ||
      trimmedLink.startsWith("https://design.hse.ru/team") ||
      trimmedLink.startsWith("https://hsedesign.ru/designer")
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onContinue({ portfolio_link: portfolioLink });
  };

  const getPlaceholder = () => {
    return "https://portfolio.hse.ru/Student/17647";
  };

  const getErrorMessage = () => {
    if (!portfolioLink) return "";
    
    const isStudentLink = portfolioLink.includes("portfolio.hse.ru/Student");
    const isUserLink = portfolioLink.includes("portfolio.hse.ru/User");
    const isTeamLink = portfolioLink.includes("design.hse.ru/team");
    const isDesignerLink = portfolioLink.includes("hsedesign.ru/designer");
    
    if (!isStudentLink && !isUserLink && !isTeamLink && !isDesignerLink) {
      return "Возможно, ты неправильно указал ссылку на портфолио. Примеры правильных ссылок: portfolio.hse.ru/Student/..., portfolio.hse.ru/User/..., design.hse.ru/team/... или hsedesign.ru/designer/...";
    }
    
    return "";
  };

  const isLinkValid = isValidPortfolioLink(portfolioLink);
  const errorMessage = getErrorMessage();

  return (
    <form className="O_Form" onSubmit={handleSubmit}>
      <label className="M_FormItem">
        <h1 className="A_Title U_Primary">Ссылка на портфолио ВШЭ</h1>
        <input 
          className="A_Input" 
          placeholder={getPlaceholder()}
          type="url"
          value={portfolioLink}
          onChange={(e) => setPortfolioLink(e.target.value)}
          required
        />
      </label>
      {errorMessage && (
        <p className="A_Description">
          {errorMessage}
        </p>
      )}
      <Button variant="primary" disabled={!isLinkValid}>Продолжить</Button>
    </form>
  );
};

export default PortfolioForm;