import React from 'react'
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  } from 'chart.js';
  import { Scatter } from 'react-chartjs-2';
import { format } from 'react-string-format';
  ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);
  
 
  export const ConvexHull = ({P_data}) => {
  return (
    <Scatter options={{
      plugins:{
        id: "Convex Hull",
        legend: {
          position: 'bottom',
        },
        labels:{
          text:format("{0}%",P_data.type[0]),
          X:{
            display: true,
            text:format("{0}%",P_data.type[0])
          },
          Y: "Energy"
        },
        title:{
          display: true,
          text:"Convex Hull"
        }
      },
        
        
        
      
    }} data={{
     
        datasets:[
            {
                label: "Convex Hull",
                data: P_data.ratio,
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            }
        ]
      }} />
  )
}
