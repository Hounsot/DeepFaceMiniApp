import React from 'react';
import Button from './Button';

const WelcomeScreen = ({ onContinue }) => {
  return (
    <div>
    {/* Подсос ника */}
      <div className='W_TitleAndDescription'>  
        <h1 className="A_Title U_Primary">Ты уже здесь? Теперь мы точно знаем, что идём в правильном направлении</h1>
        <p className="A_Description">Быстрее присоединяйся к коммьюнити
        и получи доступ к раннему тестированию</p>
      </div>
      <Button variant="primary" onClick={onContinue}>Заклеймить аккаунт</Button>
    </div>
  );
};

export default WelcomeScreen;
