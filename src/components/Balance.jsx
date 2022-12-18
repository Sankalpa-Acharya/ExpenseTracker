import React, { useContext } from 'react'
import { globalContext } from '../context/globalState';
const Balance = () => {
  const {transaction,calculation} = useContext(globalContext);
  return (
    <div className='balance'>
        <p>your Balance</p>
        <span>${ calculation(transaction,'income') - calculation(transaction,'expense')  }</span>
    </div>
  )
}

export default Balance;
