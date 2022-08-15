import React from 'react'
import { UUIDInfo } from '../componet/QueryComponent/UUIDInfo'

export const ShowProcess = ({Process_data, filter_type, filter_user, filter_status}) => {
  
  return (
    <table className='dataTable'>
        <thead>
            <tr>
                <th key="processhead">Time</th>
                <th key="Type">Cal_Type</th>
                <th key="User">Computer</th>
                <th key="Status">Status</th>
                <th key="UUID">UUID</th>

            </tr>
            </thead>
            <tbody>
            
            {Process_data.map((pd,idx)=>(

              
                  filter_type.includes(pd.Cal_Type) && filter_user.includes(pd.Computer) && filter_status.includes(pd.Status) ? (
                    <tr key={idx}>
                    <td key={idx+"time"}>{pd.Time}</td>
                    <td key={idx+"type"}>{pd.Cal_Type}</td>
                    <td key={idx+"user"}>{pd.Computer}</td>
                    <td key={idx+"status"}>{pd.Status}</td>
                    <td><UUIDInfo node={pd.UUID} type_cal={pd.Status}></UUIDInfo> </td>
                </tr>
                  ):(<></>)

                
               
            ))}
            </tbody>
            

       

    </table>
  )
}
