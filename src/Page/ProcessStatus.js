import React from 'react'
import  ShowProcess  from '../componet/ShowProcess'
import '../CSS/App.css'
import '../CSS/flexbox.css'
import '../CSS/Button.css'
import {  useEffect } from 'react'
import NavBar from '../componet/NavBar'
import { motion } from 'framer-motion'
import { ProcessChart } from '../componet/charts/ProcessChart'
import { StatusComp } from '../componet/QueryComponent/StatusComp'
export const ProcessStatus = () => {

    const {
        state:{ctp,user,pstatus,ProcessData,ProcessNum,isc,setCtp,setIsc,setUser,setPstatus},
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
    const clear_filter=() =>{
        ctp.length<1?(
            setCtp(JSON.parse(ProcessNum).Types)
        ):(setCtp(ctp))

        user.length<1?(
            setUser(JSON.parse(ProcessNum).User)
        ):(setUser(user))
        

        pstatus.length<1?(
            setPstatus(JSON.parse(ProcessNum).Status)):
            (setPstatus(setPstatus))
        setIsc(true)




        // setIsc(true)
     
    }
    const resetF=()=>{

            
            setCtp([])
            setPstatus([])
            setUser([])

    }

    
    useEffect(()=>{
    setTimeout(() => {
        fetch_res()
            
        }, 2000);
         
         
    })
    
    // const onChangeValue = e => {
    //     const newList =ctp.concat( [e.target.value] );
    //     setCtp(newList)
    //     console.log(ctp)
    //   }
   
   


  
        return (
    <div>
        <NavBar></NavBar>

        <div className='Query_cont_L1'>
            <div className='Query_box1_L1'>
                <div className='Query_box1_L2'>
                    <h2 className='common'>Show Process Status</h2>
                </div>
                
                <div className='Query_box3_L2'>
                    <ProcessChart P_data={JSON.parse(ProcessNum)}></ProcessChart>
                </div>
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
                    <motion.button variants={buttonV} whileHover="hover" className='buttonQuery' onClick={clear_filter} >Fetch Process Status</motion.button>
                    <button className='buttonQuery' onClick={resetF}>Clear</button>
                </div>

            </div>
            <div className='Query_box2_L1'>
                {isc && <ShowProcess Process_data={JSON.parse(ProcessData)} filter_type={ctp} filter_user={user} filter_status={pstatus}></ShowProcess>}
            </div>
        </div>

    </div>
  )
}
