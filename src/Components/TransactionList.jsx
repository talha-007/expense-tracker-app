import React, { useContext } from 'react'
import '../App.css'
import { GlobalContext } from '../context/GlobalState'
import Transactions from './Transactions'


const TransactionList = () => {

    const {transactions} = useContext(GlobalContext);


  return (
    <div>
        <h3>History</h3>
      <ul  className="list">
        {
          transactions.map(transaction=>{
            return(
              <Transactions key={transaction.id} transaction={transaction}></Transactions>
            )
          })
        }
       
      </ul>
    </div>
  )
}

export default TransactionList