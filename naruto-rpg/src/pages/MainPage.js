import React, { useContext } from 'react';
import context from '../context/MyContext';
import Footer from '../components/Footer';
import CardArmas from '../components/CardArmas';
import { GrMoney } from 'react-icons/gr';
import sendToLoginPage from '../utils/sendToLoginPage';
import { useHistory } from 'react-router-dom';


function MainPage() {
  const history = useHistory();
  sendToLoginPage(history);
  
  const { money } = useContext(context);
  return (
    <div className='background'>
      <h1 className='title'>Main Page</h1>
      <div className='mainMoney'>
        <GrMoney className='iconMoney' />
        <p className='numMoney'>{ money }</p>
      </div>
      <CardArmas />
      <Footer />
    </div>
  )
}

export default MainPage