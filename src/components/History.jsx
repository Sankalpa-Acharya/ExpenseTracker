import React, { useContext } from 'react'
import { globalContext } from '../context/globalState'


export default function History() {
  const { transaction } = useContext(globalContext);
  return (
    <>
      <h5>Hisotry</h5>
      <hr />
      <div className="historycontainer">
      {
        transaction.map((element) => {
          
          return (
          <div key={element.id} className={'history ' + (element.amount>0 ? 'plus' : 'minus')}>
            <p className='cash'>{element.text}</p>
            <p className='amount'>{element.amount}</p>
          </div>

          );
        })
      }
</div>


    </>
  )
}
