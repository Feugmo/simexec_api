import { useState } from 'react'


export const StatusComp = () => {
    
    const [isc,setIsc]=useState(false)
    const [ctp,setCtp]=useState([]);
    const [user, setUser]=useState([]);
    const [pstatus,setPstatus]=useState([]);
    const [ProcessData,setProcessData]=useState('[{"Cal_Type": "vasp.vasp", "Time": "08/10/22 21:10", "Status": "FINISHED", "Computer": "graham (graham.computecanada.ca)", "UUID": "ee348e16-dd33-48d5-b124-d99c12f8da49"},{"Cal_Type": "lammps.force", "Time": "07/11/22 13:31", "Status": "FINISHED", "Computer": "localhost (localhost)", "UUID": "59326602-dd21-49fc-b37a-df1b98476801"},{"Cal_Type": "lammps.optimize", "Time": "06/29/22 19:59", "Status": "CREATED", "Computer": "localhost (localhost)", "UUID": "a2675677-9b0e-495e-bc18-92ef1681e5c7"}]')
    const [ProcessNum,setProcessNum]=useState('{"Status": ["FINISHED", "WAITING", "KILLED", "EXCEPTED", "CREATED"],"Status_num": [21, 4, 3, 1, 8],"Types":["lammps.optimize","vasp.vasp","lammps.force"],"User":["graham (graham.computecanada.ca)","localhost"]}')
    const fetch_res = async ()=>{
        const response = await fetch("http://localhost:8001/get/process")
        const structure_data = await response.json()
        setProcessData(structure_data)
        const responses = await fetch("http://localhost:8001/get/process/num")
        const p_num = await responses.json()
        setProcessNum(p_num)
        // setCtp(JSON.parse(ProcessNum).Types)
        // setUser(JSON.parse(ProcessNum).User)
        // setPstatus(JSON.parse(ProcessNum).Status)

        
    }
    
    const onChangeUeser = id =>{
        const findID=user.indexOf(JSON.parse(ProcessNum).User[id])
        if (findID > -1) {
            user.splice(findID, 1);
  
          } else {
            user.push(JSON.parse(ProcessNum).User[id]);
          }
          console.log(user)
  
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
          console.log(pstatus)

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
        console.log(ctp)
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