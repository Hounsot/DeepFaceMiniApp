import React from 'react';
import Button from './Button';

const SuccessMessage = ({ position }) => {
  return (
    <div>
      <h1 className="A_Title U_Primary">Николай, мы добавили тебя в очередь на ранний доступ! Ты под номером:</h1>
      <p className="A_Counter">{position}</p>
      <p className="A_Description">Уже чувствуешь, какой ты особенный?</p>
      <Button variant="secondary">Поделиться</Button>
    </div>
  );
};

export default SuccessMessage;
