import React, { Component} from 'react';
import { UUIDInfo } from '../componet/QueryComponent/UUIDInfo'

export default class ShowProcess extends Component { 
  constructor (props){
    super(props);
    this.state ={
      Process_data:props.Process_data, filter_type:props.filter_type, filter_user:props.filter_user, filter_status:props.filter_status
    }
    
  }

  reverse_time =()=>{
    this.setState(
      {Process_data: this.props.Process_data.reverse()}
    )
    

  }
  render(){return (
    <table className='dataTable'>
        <thead>
            <tr>
                <th key="processhead" ><button  onClick={this.reverse_time}>Time</button> </th>
                <th key="Type">Cal_Type</th>
                <th key="User">Computer</th>
                <th key="Status">Status</th>
                <th key="UUID">UUID</th>

            </tr>
            </thead>
            <tbody>
            
            {this.props.Process_data.map((pd,idx)=>(

              
                this.props.filter_type.includes(pd.Cal_Type) && this.props.filter_user.includes(pd.Computer) && this.props.filter_status.includes(pd.Status) ? (
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
  )}
  
}