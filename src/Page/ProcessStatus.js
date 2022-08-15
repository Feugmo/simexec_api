import React from 'react'
import { ShowProcess } from '../componet/ShowProcess'
import '../CSS/App.css'
import '../CSS/flexbox.css'
import '../CSS/Button.css'
import { useState, useEffect } from 'react'
import NavBar from '../componet/NavBar'
import { motion } from 'framer-motion'
import { ProcessChart } from '../componet/charts/ProcessChart'

export const ProcessStatus = () => {

    const buttonV={
        hover:{
            scale: 1.05,
            transition :{
                duration:0.2
            }
        }
    }

    const [ctp,setCtp]=useState([]);
    const [user, setUser]=useState([]);
    const [pstatus,setPstatus]=useState([]);
    const [isc,setIsc]=useState(false)
    const [ProcessData,setProcessData]=useState('[{"Time":"None","Cal_Type":"None","Status":"None","UUID":"None"}]')
    const [ProcessNum,setProcessNum]=useState('{"Status": ["FINISHED", "WAITING", "KILLED", "EXCEPTED", "CREATED"],"Status_num": [21, 4, 3, 1, 8],"Types":["None"],"User":["None"]}')
    const fetch_res = async ()=>{
        const response = await fetch("http://localhost:8001/get/process")
        const structure_data = await response.json()
        setProcessData(structure_data)
        const responses = await fetch("http://localhost:8001/get/process/num")
        const p_num = await responses.json()
        setProcessNum(p_num)
    }
    useEffect(()=>{
         fetch_res()
    })
    
    // const onChangeValue = e => {
    //     const newList =ctp.concat( [e.target.value] );
    //     setCtp(newList)
    //     console.log(ctp)
    //   }
    const onChangeUeser = id =>{
        const findID=user.indexOf(JSON.parse(ProcessNum).User[id])
        if (findID > -1) {
            user.splice(findID, 1);
  
          } else {
            user.push(JSON.parse(ProcessNum).User[id]);
          }
  
          setIsc(false)
          setUser(user);
    }

    const onChangeStatus = id =>{
        const findID=pstatus.indexOf(JSON.parse(ProcessNum).Status[id])
        if (findID > -1) {
            pstatus.splice(findID, 1);
  
          } else {
            pstatus.push(JSON.parse(ProcessNum).Status[id]);
          }
  
          setIsc(false)
          setPstatus(pstatus);
    }

    

    const onChange = id => {
        
    
        // Find index
        const findIdx = ctp.indexOf(JSON.parse(ProcessNum).Types[id]);
    
        // Index > -1 means that the item exists and that the checkbox is checked
        // and in that case we want to remove it from the array and uncheck it
        if (findIdx > -1) {
          ctp.splice(findIdx, 1);

        } else {
          ctp.push(JSON.parse(ProcessNum).Types[id]);
        }

        setIsc(false)
        setCtp(ctp);
      };
    

    const clear_filter=() =>{
        ctp.length<1?(
            setCtp(JSON.parse(ProcessNum).Types)
        ):(setCtp(ctp))

        user.length<1?(
            setUser(JSON.parse(ProcessNum).User)
        ):(setUser(user))
        setIsc(true)

        pstatus.length<1?(
            setPstatus(JSON.parse(ProcessNum).Status)):
            (setPstatus(setPstatus))
        
    }


  
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
                <div className='Cal_type_Filter_Cont'>
                    {JSON.parse(ProcessNum).Types.map((tp,idx)=>(
                        <p>{tp}<input type='checkbox' value={tp} name="filter_type" key={idx} onChange={()=> onChange(idx)} selected={ctp.includes(tp)}/></p>
                    ))}
                    {JSON.parse(ProcessNum).User.map((tp,idx)=>(
                        <p>{tp}<input type='checkbox' value={tp} name="filter_user" key={idx} onChange={()=> onChangeUeser(idx)} selected={user.includes(tp)}/></p>
                    ))}

                    {JSON.parse(ProcessNum).Status.map((tp,idx)=>(
                        <p>{tp}<input type='checkbox' value={tp} name="filter_status" key={idx} onChange={()=> onChangeStatus(idx)} selected={pstatus.includes(tp)}/></p>
                    ))}
                </div>
                
                <div className='Query_box2_L2'>
                    <motion.button variants={buttonV} whileHover="hover" className='buttonQuery' onClick={clear_filter} >Fetch Process Status</motion.button>
                </div>
            </div>
            <div className='Query_box2_L1'>
                {isc && <ShowProcess Process_data={JSON.parse(ProcessData)} filter_type={ctp} filter_user={user} filter_status={pstatus}></ShowProcess>}
            </div>
        </div>

    </div>
  )
}
