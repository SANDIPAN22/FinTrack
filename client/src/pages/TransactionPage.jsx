import React from 'react'
import AddTransactionForm from '../components/AddTransactionForm'

const TransactionPage = () => {
  return (
    <>
    
     <div className="modifyTransaction flex justify-center ">
     <div className="text-xl font-thin text-center dark:text-white mt-2 sm:text-3xl ">Modify <span className='underline decoration-sky-500'>Transaction</span> </div>
    </div>
    <div className="modifyTransaction flex justify-center ">
    <AddTransactionForm/>
    </div>
    
    </>
   
   
  )
}

export default TransactionPage