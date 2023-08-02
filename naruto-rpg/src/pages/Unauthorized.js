import React from 'react'
import { Link } from 'react-router-dom';

function Unauthorized() {
  return (
    <div className="notFoundContainer">
      <h1 className="notFoundTitle">Não autorizado</h1>
      <p className="notFoundText">401</p>
      <Link to="/mainpage" className='linkLogin'>Volte para a página principal</Link>
      <Link to="/" className='linkLogin'>Volte para a página de login</Link>
    </div>
  )
}

export default Unauthorized