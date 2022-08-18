import React from 'react'
import '../../CSS/App.css'
export const UUResult = ({result_key,result_value}) => {
  return (
    <div className='card' style={{display:"flex", height:"50%"}}>
      <div style={{display:"flex", flexDirection:"column"}}>
        {result_key.map((r,idx)=>(
                  <p key={idx}>{r.toString()}</p>
              ))}
      </div>
            
      <div style={{display:"flex", flexDirection:"column", flexWrap:"wrap", overflow:"scroll"}}>
        {result_value.map((r,idx)=>(
                  <p key={idx}>{r.toString()}</p>
              ))}
      </div>
            

        
    </div>
  )
}
