import React, { useState } from 'react'
import Chart from '../components/Chart'
import AddTransactionForm from '../components/AddTransactionForm'
import Cards from '../components/Cards'
import { MdDateRange } from "react-icons/md";
import { MonthPicker, MonthInput } from 'react-lite-month-picker';

const HomePage = () => {

  
const [selectedMonthData, setSelectedMonthData] = useState({
  month: 7,
  year: 2024,
});
const [isPickerOpen, setIsPickerOpen] = useState(false);

  return (
    <>
       

    <div className='flex justify-center gap-2 mt-1 flex-wrap'>
      <span className='text-xl font-thin text-center dark:text-white mt-2 sm:text-3xl'>Report For Your Month:  </span>
      <span className='mt-1'>
        <MonthInput
        size={"small"}
          selected={selectedMonthData}
          setShowMonthPicker={setIsPickerOpen}
          showMonthPicker={isPickerOpen}
        />
      </span>
      <div className='z-10 relative right-1/2  sm:right-0'>
      {isPickerOpen ? (
          
          <MonthPicker
          size={"small"}
            setIsOpen={setIsPickerOpen}
            selected={selectedMonthData}
            onChange={setSelectedMonthData}
          />
        ) : null}
      </div>
      
     </div>
     
    <div className='homepage_block_1 flex justify-center sm:justify-evenly  flex-col sm:flex-row mt-1' >
      <div className="chat_canvas p-5 mt-1 sm:w-96 sm:mt-20"> 
          <Chart/> 
      </div>
      <div className="form_canvas">
          <AddTransactionForm/>
      </div>
      
      
    </div>


    <div className='homepage_block_2 flex justify-center flex-wrap items-center flex-row mt-10 gap-4 px-36 sm:justify-evenly'>
        <Cards />
        <Cards/>
        <Cards/>
        <Cards />
        
    </div>
    
    </>
  )
}

export default HomePage