import React, { useContext, useState } from 'react'
import { globalContext } from '../context/globalState';

export default function Addnewtransaction() {
  const {addExpense} = useContext(globalContext);
  const [text,setText] = useState('');
  const [amount,setAmount] = useState(0);
  const formSubmit = ()=>{
      addExpense(text,amount);
  }

  return (
    <>
    <div className='newtransaction'>
    <h4>Add new Transaction</h4>
    <hr />
    <div className='addtext'>
      <h5> Text</h5>
      <input onChange={(e)=>{setText(e.target.value)}} type="text"  placeholder='Enter a text'/>
    </div>
    <div className='addamount'>
      <h5> Amount</h5> <p>(Negative-expense,positive-income)</p>
      <input onChange={(e)=>{setAmount(e.target.value)}} type="number"  placeholder='Enter a number'/>
    </div>
    <span onClick={formSubmit} className='btn'>Add Transaction</span>
    </div>
    </>
  )
}
