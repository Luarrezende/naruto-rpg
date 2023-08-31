import React, { useState, useContext, useEffect } from 'react'
import context from '../context/MyContext';
import { useHistory } from 'react-router-dom';
import Footer from '../components/Footer'
import Img from '../components/Img'
import { GrMoney } from 'react-icons/gr';
import sendToLoginPage from '../utils/sendToLoginPage';

function Profile() {
  const history = useHistory();
  const { money, setMoney } = useContext(context);

  const [moneyValue, setMoneyValue] = useState('');

  const nameStorage = JSON.parse(localStorage.getItem('user'));
  
  useEffect(() => {
    sendToLoginPage(history);
    const savedMoney = localStorage.getItem('money');
    if (savedMoney !== null) {
      setMoney(Number(savedMoney));
    }
  }, [setMoney, history]);

  const handleInputChange = (event) => {
    setMoneyValue(event.target.value);
  };

  const handleClick = (param) => {
    if (param === 'mais') {
      setMoney(money + Number(moneyValue))
    } else {
      setMoney(money - Number(moneyValue))
    }

    setMoneyValue('')
  }

  useEffect(() => {
    localStorage.setItem('money', money);
  }, [money]);

  const logout = () => {
    localStorage.clear();
    history.push('/');
  };

  return (
    <div className='background'>
      {
        nameStorage && nameStorage.name !== null ? (
          <div>
            <div className='imgLocate'>
              <Img name={nameStorage.name} />
            </div>

            <p className='nameProfile'>{nameStorage.name}</p>
          </div>
        ) : null
      }

      <div className='profileMoney'>
        <GrMoney className='iconMoney' />
        <p className='money'>{ money }</p>
      </div>

      <div className='containerCenter'>
        <input
          name='inputMoney'
          className='inputLogin'
          type='number'
          onChange={ handleInputChange }
          value={ moneyValue }
          placeholder='Insert Money'
        />
      </div>

      <div className='centerBottom'>
        <button
          className='payButton'
          onClick={ () => handleClick('menos') }
        >
          Pay
        </button>
      </div>

      <div className='centerBottom'>
        <button
          className='payButton'
          onClick={ () => handleClick('mais') }
        >
          Receive
        </button>
      </div>

      <div className='centerBottom'>
        <button className='logout' onClick={ logout }>Logout</button>
      </div>
      <Footer />
    </div>
  )
}

export default Profile