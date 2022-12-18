import React, { createContext, useReducer } from 'react'


const initialState = {
    transaction: [{ id: 1, text: 'Flower', amount: -20 },
    { id: 2, text: 'Salary', amount: 300 },
    { id: 3, text: 'Book', amount: 10 },
          { id: 4, text: 'Camera', amount: -150 }
    ],
    balance:300,
}


const appReducer = (state, action) => {
    switch (action.type) {
        default:
            return state;
        case 'ADD_TRANSACTION':
            return {
                ...state,
                transaction: [action.value,...state.transaction]
            }


    }
}


export const globalContext = createContext(initialState);

export const Globalprovider = ({ children }) => {
    const [state, dispatch] = useReducer(appReducer, initialState)

    // action provider
    // actions
    const addExpense = (text, amount) => {
        dispatch(
            {
                type: 'ADD_TRANSACTION',
                value: {id:Math.random(),text:text, amount:+amount}
            }
        )

    }

    const calculation=  (transaction,type)=>{
        if(type==='expense'){
        return Math.abs(transaction.map(trans=>{return trans.amount <0 ? trans.amount : 0 }).reduce((current,value)=>{return current+value}));
        }
        else if(type==='income'){
            return Math.abs(transaction.map(trans=>{return trans.amount >0 ? trans.amount : 0 }).reduce((current,value)=>{return current+value}));
        }
    }

    return (<globalContext.Provider value={{ transaction: state.transaction, addExpense, calculation }}>

        {children}

    </globalContext.Provider>

    );

}