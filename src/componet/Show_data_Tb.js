import React from 'react'
import { format } from 'react-string-format'
import '../CSS/App.css'
export const ShowDataTR = ({SDs}) => {
  
  return (

      <table className='dataTable'>
        <thead>
          <tr>
          <th>Formula</th>
          <th>Space Group</th>
          <th>Calc Type</th>
          <th>Energy</th>
          <th>UUID</th>
          </tr>
          
        </thead>
          

        <tbody>
        {SDs.map((sd,idx)=>(
        <tr key={idx}>
          <td key={format("{0} formula",idx)}>{sd.Formula}</td>
          <td key={format("{0} Cell",idx)}>{sd.Space_G}</td>
          <td key={format("{0} Type",idx)}>{sd.Cal_Type}</td>
          <td key={format("{0} Energy",idx)}>{sd.Energy}</td>
          <td key={format("{0} UUID",idx)}>{sd.UUID}</td>
        </tr>
        ))}
        </tbody>
        
      
    </table>
    
  )
}
