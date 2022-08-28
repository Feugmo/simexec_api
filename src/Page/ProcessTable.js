import React from 'react'
import ShowProcess from '../componet/ShowProcess'
import { useLocation } from 'react-router-dom'
import NavBar from '../componet/NavBar'
import {Routes, Route} from 'react-router-dom';
import { ProcessStatus } from './ProcessStatus';
import {useNavigate} from 'react-router-dom';
export const ProcessTable = () => {
  const navigate = useNavigate();
    const {state} =useLocation();
    const{Process_data,ctp,user,pstatus,ProcessNum} = state;
    const back_to_status=()=>{
      navigate('/query/get_process/*')
    }
   

  return (
    <div>
        <NavBar></NavBar>
        <h2>Filter Applied</h2>
        <div style={{display:"flex", flexDirection:"row"}}>
            <p>User: {user<1?("None"):(user)}. </p>
            <p>Type: {ctp<1?("None"):(ctp)}. </p>
            <p>Status: {pstatus<1?("None"):(pstatus)}. </p>
            <button className='button_Nav' onClick={back_to_status} style={{margin:"0 2% 1% 2%", padding:"1%"}}> Back</button>
        </div>
        <ShowProcess Process_data={JSON.parse(Process_data)} filter_type={ctp<1?(JSON.parse(ProcessNum).Types):(ctp)} filter_user={user<1?(JSON.parse(ProcessNum).User):(user)} filter_status={pstatus<1?(JSON.parse(ProcessNum).Status):(pstatus)}></ShowProcess>
    <Routes>
      <Route path='/query/get_process/*' element={<ProcessStatus/>} />
    </Routes>
    </div>
  )
}
