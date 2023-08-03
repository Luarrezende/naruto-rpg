import React from 'react'
import Luar from '../img/luar.jpeg'
import Luana from '../img/luana.png'
// import Gabriel from '../img/Gabriel.jpeg'
import Nelson from '../img/nelson.jpeg'
// import Igor from '../img/Igor.jpeg'
import Default from '../img/default.png'

function Img(props) {
  const selectImg = () => {
    const { name } = props;
    switch (true) {
      case name === 'Luar':
        return Luar
      case name === 'Luana':
        return Luana
      // case name === 'Gabriel':
      //   return Gabriel
      case name === 'Nelson':
        return Nelson
      // case name === 'Igor':
      //   return Igor
      default:
        return Default
    }
    
  }

  selectImg()

  return (
    <div>
      <img src={ selectImg() } alt={ selectImg() } className='img' />
    </div>
  )
}

export default Img