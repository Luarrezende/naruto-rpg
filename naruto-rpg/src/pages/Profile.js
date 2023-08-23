import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import Footer from '../components/Footer'
import Img from '../components/Img'
import { GrMoney } from 'react-icons/gr';

function Profile() {
  const history = useHistory();

  const [moneyValue, setMoneyValue] = useState('')
  const [money, setMoney] = useState(0);

  const nameStorage = JSON.parse(localStorage.getItem('user'));

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

  const logout = () => {
    localStorage.clear();
    history.push('/');
  };

  return (
    <div className='background'>
      <div className='imgLocate'>
        <Img name={ nameStorage.name } />
      </div>

      <p className='nameProfile'>{ nameStorage.name }</p>

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
          Pagar
        </button>
      </div>

      <div className='centerBottom'>
        <button
          className='payButton'
          onClick={ () => handleClick('mais') }
        >
          Receber
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