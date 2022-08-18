import React from 'react'
import { GenInfo } from '../../Page/UUID_Slide';
import {Routes, Route, useNavigate} from 'react-router-dom';
import { format } from 'react-string-format';
export const UUIDInfo = ({node,type_cal}) => {
  const navigate = useNavigate();
  const fetch_detail = async (node) =>{
      const response = await fetch(format('http://localhost:8001/get/UUID/{0}',node))
      const uuI=await response.json()
      navigate('/query/UUID/detail', {state:{id:uuI , cal_node:node}}) 
  }
  
  return (
    
    <div>
      {type_cal === "FINISHED"?(
        <button className='button_UUID' onClick={()=> fetch_detail(node)}>{node}</button>
        
      ):(<p>{node}</p>)}
      <Routes>
          <Route path='/query/UUID/detail' element={<GenInfo/>}/>
        </Routes>
    </div>
  )
}
