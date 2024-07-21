import React from 'react'
import { GrLogout } from "react-icons/gr"; 
const Header = () => {
  return (
   <>
   <div className="header flex  items-center   flex-col ">
     <div className='text-6xl sm:text-8xl font-bold mt-20  bg-gradient-to-r from-blue-400 via-green-500 to-red-400 inline-block text-transparent bg-clip-text'>FinTrack</div>
     <div className='text-2xl sm:text-4xl font-thin dark:text-white'>Spend Wisely, Save Easily! </div> 
     <div className="profilecard mt-4 flex flex-row text-base sm:text-xl font-bold">
        <div className="name bg-gradient-to-r from-green-500 via-indigo-300 to-blue-400 bg-clip-text text-transparent">Hello Sandipan </div>  
        <div className="logout mt-1 ml-5 dark:text-white"><GrLogout /></div>
    </div>
   </div>
   </>
  )
}

export default Header