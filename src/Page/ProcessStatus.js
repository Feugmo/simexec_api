import React from 'react'
import { ProcessTable } from './ProcessTable'
import '../CSS/App.css'
import '../CSS/flexbox.css'
import '../CSS/Button.css'
import {  useEffect } from 'react'
import NavBar from '../componet/NavBar'
import { motion } from 'framer-motion'
import { ProcessChart } from '../componet/charts/ProcessChart'
import StatusComp from '../componet/QueryComponent/StatusComp'
import {useNavigate} from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';
export const ProcessStatus = () => {
    

    const {
        state:{ctp,user,pstatus,ProcessData,ProcessNum},
        onChange,onChangeStatus,onChangeUeser,fetch_res
    } = StatusComp()
    

    const buttonV={
        hover:{
            scale: 1.05,
            transition :{
                duration:0.2
            }
        }
    }
    const navigate = useNavigate();
    const show_status_table = () =>{
      
      
      setTimeout(() => {
        navigate('/query/get_process/table/*',{state:{Process_data:ProcessData,ctp:ctp,user:user,pstatus:pstatus,ProcessNum:ProcessNum}})
      }, 100);
      
    }

    
    useEffect(()=>{
    setTimeout(() => {
        fetch_res()   
        }, 300);
    })
    


  
        return (
    <div>
        <NavBar></NavBar>

        <div className='Query_cont_L1'>
            <div className='Query_box1_L1'>
                <div className='Query_box1_L2'>
                    <h2 className='common'>Process Status Summary</h2>
                </div>
                <h4>Calculation Status Summary</h4>
                
                <div className='Query_box3_L2'>
                    <ProcessChart process_type_label={JSON.parse(ProcessNum).Status} Process_type_value={JSON.parse(ProcessNum).Status_num} title={"Status Summary"} ></ProcessChart>
                    
                    
                </div>
                <h4>Computer Summary</h4>
                <div className='Query_box3_L2'>
                  <ProcessChart process_type_label={JSON.parse(ProcessNum).User} Process_type_value={JSON.parse(ProcessNum).User_num} title={"Computer Summary"}></ProcessChart>
                </div>
                <h4>Calculation Type Summary</h4>
                <div className='Query_box3_L2'>
                  <ProcessChart process_type_label={JSON.parse(ProcessNum).Types} Process_type_value={JSON.parse(ProcessNum).Type_num} title={"Computer Summary"}></ProcessChart>
                </div>

                
                
                
                


            </div>
            <div className='Query_box2_L1'>
            <h2 className='common'>Filter</h2>
                  <div className='Cal_type_Filter'>

                    <div>
                      <h1>Calculation Type</h1>
                      {JSON.parse(ProcessNum).Types.map((tp,idx)=>(
                      <p key={idx+"TypeP"}>{tp}   <input  type='checkbox' value={tp} name="filter_type" key={idx+"Type"} onChange={()=> onChange(idx)} /></p>
                      ))}
                    </div>
                    <div>
                      <h1>Calculation Status</h1>
                      {JSON.parse(ProcessNum).Status.map((tp,idx)=>(
                          <p key={idx+"StaP"}>{tp}   <input type='checkbox' value={tp} name="filter_status" key={idx+"Status"} onChange={()=> onChangeStatus(idx)}/></p>
                      ))}
                    </div>
                    <div>
                      <h1>Computer</h1>
                      {JSON.parse(ProcessNum).User.map((tp,idx)=>(
                          <p key={idx+"UserP"}>{tp}   <input type='checkbox' value={tp} name="filter_user" key={idx+"User"} onChange={()=> onChangeUeser(idx)}/></p>
                      ))}
                    </div>
                  </div>
                  <div className='Query_box2_L2'>
                    <motion.button variants={buttonV} whileHover="hover" className='buttonQuery' onClick={()=>show_status_table()} >Fetch Process Status</motion.button>
                    
                </div>
                </div>



        </div>
        <Routes>
          <Route path='/query/get_process/table/*' element={<ProcessTable/>}/>
        </Routes>


    </div>
  )
}