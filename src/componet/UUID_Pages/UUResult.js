import React from 'react'
import '../../CSS/App.css'
export const UUResult = ({result_key,result_value,rlist}) => {
  return (
    <div className='card' style={{height:"95vh", overflow:"scroll", display:"flex", flexWrap:"wrap"}}>
      <h2>Output List</h2>
      <table className='dataTable'>
        <thead>
          <th>Key</th>
          <th>Value</th>
        </thead>
        <tbody>
          {result_key.map((rk,idx)=>(
            <tr>
              <td key={idx+"key" }style={{padding:"0",margin:"0"}}>{rk}</td>
              <td key={idx+"value"} style={{ maxWidth:"35vw", fontWeight:"bolder", padding:"0",margin:"0"}}>
                {result_value[idx]}</td>
            </tr>
          ))}
          <tr>
            <td style={{padding:"0",margin:"0"}}>Retrieved Files</td>
            <td style={{padding:"0",margin:"0"}}>{rlist.toString()}</td>
          </tr>
        </tbody>
      </table>
            

        
    </div>
  )
}
