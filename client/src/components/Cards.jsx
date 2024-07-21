import React from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
const cardsBackgroundMap = {
  "investment": "from-blue-900 to-blue-500",
  "income": "from-green-900 to-green-500",
  "expense": "from-red-900 to-red-500",
}

const Cards = () => {
  return (
    <>
      <div class="">
        <div className={`text-white max-w-xs my-auto mx-auto bg-gradient-to-r ${cardsBackgroundMap["income"]} p-4 py-5 px-5 rounded-xl`}>
          <div class="flex justify-between">
            <div>
              <h2> Amount </h2>
              <p class="text-2xl font-bold"> $500,000 </p>
            </div>
            <div class="flex items-center ">
             
              <div class="p-2 bg-gray-200 bg-opacity-30 rounded-full -ml-8 flex gap-1">
              <FaEdit color="blue" />
              <MdDelete color="red"/>
              </div>
            </div>
          </div>
          <div class="mt-5 flex justify-between items-center w-52">
            <span class="text-lg"> Salary from ABC pvt. ltd</span>
            
          </div>
          <div class="flex justify-between mt-5 w-48 ">
            <div>
              <h3 class="text-xs"> Date </h3>
              <p class="font-bold"> 10/21 </p>
            </div>
            <div>
              <h3 class="text-xs"> Method </h3>
              <p class="font-bold"> UPI </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
