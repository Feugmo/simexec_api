import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Bar } from 'react-chartjs-2';
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  export const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      id:"Process_type",
      
    },
  };
 
  export const ProcessChart = ({process_type_label,Process_type_value, title}) => {
  return (
    <Bar options={options} 

    data={{
        labels:process_type_label, 
        datasets:[
            {
                label: title,
                data: Process_type_value,
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            }
        ]
      }} />
  )
}
