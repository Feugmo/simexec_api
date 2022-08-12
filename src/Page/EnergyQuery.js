import React from 'react'
import { useState } from 'react';
import { format } from 'react-string-format';
import '../CSS/App.css'
import '../CSS/Button.css'
import NavBar from '../componet/NavBar';
import { ShowDataTR } from '../componet/Show_data_Tb';
export const EnergyQuery = () => {
    const [e_min, setE_min]=useState(-Infinity)
    const [e_max, setE_max]=useState(Infinity)
    const [structures,setStrucutres]=useState('[{"Cell":"None","Formula":"NONE","Cal_Type":"None","Energy":"None","UUID":"None"}]')
    const update_elemnt_min = e =>{
        setE_min(e.target.value)
      }
      const update_elemnt_max = e =>{
        setE_max(e.target.value)
      }

    const fetch_res = async (e_min,e_max)=>{
        const response = await fetch(format("http://localhost:8001/get/filtered/energy/{0}/{1}",e_min,e_max))
        const structure_data = await response.json()
        setStrucutres(structure_data)}
  return (
    <>
    <NavBar></NavBar>

    <div className='Query_cont_L1'>
    
    <div className='Query_box1_L1'>
    <div className='Query_box1_L2'>
      <h2 className='common'>Query on Energy</h2>   
    </div>
      <div className='Query_box1_L2'>
        <input className="inputNeum" type='text' value={e_min} onChange={update_elemnt_min}></input>
      </div>
      <div className='Query_box1_L2'>
        <input className="inputNeum" type='text' value={e_max} onChange={update_elemnt_max}></input>
      </div>
        <div className='Query_box2_L2'>
      <button className='buttonQuery' onClick={()=> fetch_res(e_min,e_max)}>Fetch Data</button>
        </div>
      </div>
    
    
    
        <div className='Query_box2_L1'>
            <ShowDataTR SDs={JSON.parse(structures)}></ShowDataTR>
    </div>
    </div>
      </>
  )
  
}
