import React from 'react'
import { Link } from 'react-router-dom';
import { CgProfile } from 'react-icons/cg';
import { BiSolidHomeCircle } from 'react-icons/bi';


function Fotter() {
  return (
    <div className='footer'>
      <Link to="/mainpage">
        <BiSolidHomeCircle className='icon' />
      </Link>
      <Link to="/profile">
        <CgProfile className='icon' />
      </Link>
    </div>
  )
}

export default Fotter