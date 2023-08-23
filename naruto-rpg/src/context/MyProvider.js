import React, { useState, useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';

function Provider({ children }) {
  const [money, setMoney] = useState(0);

  const values = useMemo(() => ({
    money,
    setMoney,
  }), [
    money,
    setMoney,
  ]);

  return (
    <MyContext.Provider value={ values }>
      {children}
    </MyContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node,
}.isRequired;

export default Provider;