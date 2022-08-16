import { useState } from 'react'


export const StatusComp = () => {
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
      
    
    return {
        state: {
            ctp,user,pstatus,ProcessData,ProcessNum,isc,setCtp,setIsc,setUser,setPstatus
        },
        onChange,onChangeStatus,onChangeUeser,fetch_res
    }
}

export default StatusComp
