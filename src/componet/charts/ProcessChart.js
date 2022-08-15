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
      
      title: {
        display: true,
        text: 'Chart.js Bar Chart',
      },
    },
  };
 
  export const ProcessChart = ({P_data}) => {
  return (
    <Bar options={options} 

    data={{
        labels:P_data.Status, 
        datasets:[
            {
                label: "Process Type",
                data: P_data.Status_num,
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            }
        ]
      }} />
  )
}
