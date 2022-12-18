import React,{useContext} from 'react'
import { globalContext } from '../context/globalState'
export default function IncomeExpense() {
  const {transaction,calculation} = useContext(globalContext); 
  return (

    <>
    
    <div className='incomeexpense'>

    <div>
        <p>Income</p>
        <span className='income'>+${calculation(transaction,'income')}</span>
    </div>
    <div>
        <p>Expense</p>
        <span className='expense'>-${calculation(transaction,'expense')}</span>
    </div>

</div>
</>
  )
}
