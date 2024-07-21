import React from 'react'
import { PolarArea } from 'react-chartjs-2';
import { Chart as ChartJS, DoughnutController, ArcElement, RadialLinearScale, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(DoughnutController, ArcElement, RadialLinearScale, Title, Tooltip);

const data = {
    labels: [
      'Expenses',
      'Investments',
      'Incomes'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [300, 150, 200],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(135, 232, 142)'
      ],
      hoverOffset: 4
    }]
  };
const Chart = () => {
  return (
    <>

        <PolarArea  data={data} />
   
    </>
    
  )
}

export default Chart