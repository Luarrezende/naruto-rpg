import React from 'react'
import { useHistory } from 'react-router-dom';
import Footer from '../components/Footer'
import Img from '../components/Img'

function Profile() {
  const history = useHistory();
  const nameStorage = JSON.parse(localStorage.getItem('user'));

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
      <div className='centerBottom'>
        <button className='logout' onClick={ logout }>Logout</button>
      </div>
      <Footer />
    </div>
  )
}

export default Profile