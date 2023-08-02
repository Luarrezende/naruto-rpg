import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Register() {
  const history = useHistory();

  const [register, setRegister] = useState({
    name: '',
    password: '',
  });

  const handleChange = ({ target: { name, value } }) => {
    setRegister({
      ...register,
      [name]: value,
    });
  };

  const handleClick = () => {
    localStorage.setItem('user', JSON.stringify({ name: register.name }));
    history.push('/mainpage');
  };

  const MIN_PASSWORD = 5;
  const MIN_NAME = 3;
  const verify = register.password.length >= MIN_PASSWORD && register.name.length >= MIN_NAME;

  return (
    <div className='center'>
        <h1 className='login'>Register</h1>
        <input
          type='text'
          placeholder='Nome'
          className='inputLogin'
          name="name"
          value={ register.name }
          onChange={ handleChange }
        />
        <input
          type='password'
          placeholder='Senha'
          className='inputLogin'
          name="password"
          value={ register.password }
          onChange={ handleChange }
        />
        <button
          className="buttonLogin"
          type="button"
          data-testid="login-submit-btn"
          disabled={ !verify }
          onClick={ handleClick }
        >
            Enter
        </button>
        <Link to="/" className='linkLogin'>Já tem registro?</Link>
    </div>
  )
}

export default Register