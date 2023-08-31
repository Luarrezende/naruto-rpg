import React, { useState, useEffect, useContext } from 'react';
import context from '../context/MyContext';
import data from '../data/data.json'

function CardArmas() {
  const { money, setMoney } = useContext(context);
  const [quantities, setQuantities] = useState(data.armas.map(() => 0));

  useEffect(() => {
    const savedQuantities = data.armas.map((arma) => {
      const quantity = localStorage.getItem(arma.nome);
      return quantity ? parseInt(quantity, 10) : 0;
    });

    const savedMoney = localStorage.getItem('money');

    setMoney(Number(savedMoney))
    setQuantities(savedQuantities);
  }, [setMoney]);

  const handleClick = (index, operacao, preco) => {
    setQuantities((prevQuantities) => {
      const newQuantities = [...prevQuantities];

      if (operacao === 'mais') {
        newQuantities[index] += 1;
        setMoney(money - Number(preco.replace(/\D/g, '')));
      } else if (operacao === 'menos' && newQuantities[index] > 0) {
        newQuantities[index] -= 1;
        setMoney(money + Number(preco.replace(/\D/g, '')) / 2);
      }
      
      localStorage.setItem(data.armas[index].nome, newQuantities[index]);

      return newQuantities;
    });
  };

  useEffect(() => {
    localStorage.setItem('money', money);
  }, [money]);

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
                onClick={ () => handleClick(index, 'mais', e.preco) }
              >
                +
              </button>
              <button
                className='operacaoBotao'
                onClick={ () => handleClick(index, 'menos', e.preco) }
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