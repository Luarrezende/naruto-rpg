import React from 'react'
import Footer from '../components/Footer'
import CardArmas from '../components/CardArmas'


function MainPage() {
  return (
    <div className='background'>
      <h1 className='title'>Main Page</h1>
      <CardArmas />
      <Footer />
    </div>
  )
}

export default MainPage