import React from 'react'
import { UUIDInfo } from '../componet/QueryComponent/UUIDInfo'

export const ShowProcess = ({Process_data, filter}) => {
  
  return (
    <table className='dataTable'>
        <thead>
            <tr>
                <th>Time</th>
                <th>Cal_Type</th>
                <th>Computer</th>
                <th>Status</th>
                <th>UUID</th>

            </tr>
            </thead>
            <tbody>
            
            {Process_data.map((pd,idx)=>(
              filter.length<1?
              ( <tr key={idx}>
                    <td>{pd.Time}</td>
                    <td>{pd.Cal_Type}</td>
                    <td>{pd.Computer}</td>
                    <td>{pd.Status}</td>
                    <td><UUIDInfo node={pd.UUID}  type_cal={pd.Status}></UUIDInfo> </td>
                </tr>):(
                  filter.includes(pd.Cal_Type) ? (
                    <tr key={idx}>
                    <td>{pd.Time}</td>
                    <td>{pd.Cal_Type}</td>
                    <td>{pd.Computer}</td>
                    <td>{pd.Status}</td>
                    <td><UUIDInfo node={pd.UUID} type_cal={pd.Status}></UUIDInfo> </td>
                </tr>
                  ):(<></>)

                )
               
            ))}
            </tbody>
            

       

    </table>
  )
}
