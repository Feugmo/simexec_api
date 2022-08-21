import React from 'react'

import { ShowDataTR } from '../componet/Show_data_Tb';
import '../CSS/App.css'
import '../CSS/Button.css'
import '../CSS/flexbox.css'
import { NavBar } from '../componet/NavBar';
import { ConvexHull } from '../componet/charts/ConvexHull';
import ElementComp from '../componet/QueryComponent/ElementComp';
export const Query = () => {

const {
  state:{structures,element,validate,convex},
  update_elemnt,fetch_res
} = ElementComp()
//const [isClick, setIsclick]=useState(false)

    
    //setIsclick(true)
  
  return (
    <>
    <NavBar></NavBar>

      <div className='Query_cont_L1'>
        <div className='Query_box1_L1'>


            <div className='Query_box1_L2'>
              <h2 className='common'>Query on Element</h2>   
            </div>
            <div className='Query_box1_L2'>
              <input placeholder='Element' className={!validate?"inputNeum":"inputNeumError"}  type='text' value={element} onChange={update_elemnt}></input>
            </div>
            <div className='Query_box2_L2'>
              <button className='buttonQuery' onClick={()=> fetch_res(element)}>Fetch Data</button>
              {!validate && <p>Please Check Your Input and backend status {validate}</p>}
          </div> 
          {validate && 
          <div className='Query_box3_L2'>
            <ConvexHull P_data={JSON.parse(convex)}></ConvexHull>
          </div>
          }
          

          
        </div>

        <div className='Query_box2_L1'>
          <ShowDataTR SDs={JSON.parse(structures)}></ShowDataTR>
        </div>

      
        
        
    </div></>
    
  )
}
