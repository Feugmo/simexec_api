import React from 'react'
import '../../CSS/App.css'
export const UUResult = ({result_key,result_value,rlist}) => {
  return (
    <div className='card' style={{height:"95vh", overflow:"scroll", display:"flex", flexWrap:"wrap"}}>
      <table className='dataTable'>
        <thead>
          <th>Key</th>
          <th>Value</th>
        </thead>
        <tbody>
          {result_key.map((rk,idx)=>(
            <tr>
              <td key={idx+"key"}>{rk}</td>
              <td key={idx+"value"} style={{overflow:"scroll", maxWidth:"35vw"}}>
                {result_value[idx]}</td>
            </tr>
          ))}
          <tr>
            <td>Retrieved Files</td>
            <td>{rlist.toString()}</td>
          </tr>
        </tbody>
      </table>
            

        
    </div>
  )
}
