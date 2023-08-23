import React, { useState, useEffect } from 'react';
import data from '../data/data.json'

function CardArmas() {
  const [quantities, setQuantities] = useState(data.armas.map(() => 0));

  useEffect(() => {
    const savedQuantities = data.armas.map((arma) => {
      const quantity = localStorage.getItem(arma.nome);
      return quantity ? parseInt(quantity, 10) : 0;
    });

    setQuantities(savedQuantities);
  }, []);

  const handleClick = (index, operacao) => {
    setQuantities((prevQuantities) => {
      const newQuantities = [...prevQuantities];

      if (operacao === 'mais') {
        newQuantities[index] += 1;
      } else if (operacao === 'menos' && newQuantities[index] > 0) {
        newQuantities[index] -= 1;
      }

      localStorage.setItem(data.armas[index].nome, newQuantities[index]);

      return newQuantities;
    });
  };

  return (
    <div className='armasContainer'>
      {
        data.armas.map((e, index) => (
          <div className='armas' key={index}>
            <img src={ e.imagem }
              alt={ e.name }
              className='imgSize'
            />
            <p className='nomeArma'>{e.nome}</p>
            <p>{e.preco}</p>
            <p>{ quantities[index] }</p>
            <div className='operacao'>
              <button
                className='operacaoBotao'
                onClick={ () => handleClick(index, 'mais') }
              >
                +
              </button>
              <button
                className='operacaoBotao'
                onClick={ () => handleClick(index, 'menos') }
              >
                -
              </button>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default CardArmas