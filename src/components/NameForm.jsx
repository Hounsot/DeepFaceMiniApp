import React, { useState } from 'react';
import Button from './Button';

const NameForm = ({ onContinue }) => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onContinue({ name, surname });
  };

  return (
    <form className="O_Form" onSubmit={handleSubmit}>
      <label className="M_FormItem">
      <h1 className="A_Title U_Primary">Имя</h1>
        <input className="A_Input" placeholder='Дипфейс'
          type="text"
          value={name}
          required
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label className="M_FormItem">
      <h1 className="A_Title U_Primary">Фамилия</h1>
        <input className="A_Input" placeholder='Эйдисиевич'
          type="text"
          value={surname}
          required
          onChange={(e) => setSurname(e.target.value)}
        />
      </label>
      <Button variant="primary">Продолжить</Button>
    </form>
  );
};

export default NameForm;
