import React from 'react'

const AddTransactionForm = () => {
  return (
   <>

<div class="p-8">
	<div class="relative py-3 ">
		<div
			class="absolute inset-0 bg-gradient-to-r from-red-300 via-green-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 rounded-3xl sm:-rotate-6 sm:rounded-3xl">
		</div>
		<div class="relative px-2 py-5 bg-white shadow-lg rounded-3xl sm:rounded-3xl sm:px-8">
			<div class="max-w-md mx-auto">
				<div>
					<h1 class="text-2xl font-thin">Add New Transaction</h1>
				</div>
				<div class="divide-y divide-gray-200 font-thin">
					<div class="py-2  leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
						<div class="relative">
							<input autocomplete="off" id="description" name="description" type="text" class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="description" />
							<label for="description" class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Description</label>
						</div>
						<div class="relative">
							<input autocomplete="off" id="amount" name="amount" type="number" class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Amount" />
							<label for="amount" class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Amount</label>
						</div>
                        
                        <div class="relative">
							<input autocomplete="off" id="date" name="date" type="date" class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Date" />
							
						</div>

                        <div class="relative">
                       
                        <select name="category" id="category" class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-440 font-thin focus:outline-none focus:borer-rose-600">
                            <option value="none">Choose Category</option>
                            <option value="income">Income</option>
                            <option value="investment">Investment</option>
                            <option value="expense">Expense</option>
                        </select>
						</div>

                        <div class="relative">
                       
                        <select name="paymentType" id="paymentType" class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-440 font-thin focus:outline-none focus:borer-rose-600">
                            <option value="none">Choose Payment Type</option>
                            <option value="CASH">CASH</option>
                            <option value="CREDIT_CARD">CREDIT_CARD</option>
                            <option value="DEBIT_CARD">DEBIT_CARD</option>
                            <option value="UPI">UPI</option>
                        </select>
						</div>

						<div class="relative">
							<button class="bg-blue-500 text-white rounded-md px-2 py-1">Submit</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
   
   </>
  )
}

export default AddTransactionForm