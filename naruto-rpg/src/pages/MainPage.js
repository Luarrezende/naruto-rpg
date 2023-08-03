import React from 'react'
import Footer from '../components/Footer'
import CardArmas from '../components/CardArmas'
import { GrMoney } from 'react-icons/gr';


function MainPage() {
  return (
    <div className='background'>
      <h1 className='title'>Main Page</h1>
      <div className='mainMoney'>
        <GrMoney className='iconMoney' />
        <p className='numMoney'>0</p>
      </div>
      <CardArmas />
      <Footer />
    </div>
  )
}

export default MainPage