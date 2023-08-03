import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';

function Login() {
  const history = useHistory();

  const [login, setLogin] = useState({
    name: '',
    password: '',
  });

  const handleChange = ({ target: { name, value } }) => {
    setLogin({
      ...login,
      [name]: value,
    });
  };

  const handleClick = () => {
    localStorage.setItem('user', JSON.stringify({ name: login.name }));
    history.push('/mainpage');
  };

  const MIN_PASSWORD = 5;
  const MIN_NAME = 3;
  const verify = login.password.length >= MIN_PASSWORD && login.name.length >= MIN_NAME;

  return (
    <div className='center'>
        <h1 className='login'>Login</h1>
        <input
          type='text'
          placeholder='Nome'
          className='inputLogin'
          name="name"
          value={ login.name }
          onChange={ handleChange }
        />
        <input
          type='password'
          placeholder='Senha'
          className='inputLogin'
          name="password"
          value={ login.password }
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
        <Link to="/register" className='linkLogin'>Ainda não tem registro?</Link>
    </div>
  )
}

export default Login