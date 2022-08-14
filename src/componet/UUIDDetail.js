import React from 'react'
import '../CSS/App.css'
import '../CSS/flexbox.css'
import '../CSS/Button.css'
import ModalImage from "react-modal-image";
import NavBar from './NavBar'
import ControlledLottie from './lottie/Flame'
import { useLocation } from 'react-router-dom'
import * as flame from './lottie/Flame.json'
import * as atom from  './lottie/atom.json'
import { format } from 'react-string-format'
export const UUIDDetail = () => {

  const {state} = useLocation();
  
  const {id,cal_node} = state;
  const uuid=cal_node
  const img_url=format('http://localhost:8001/get/UUID/cal_graph_pic/{0}',uuid)
  const info=JSON.parse(id);



  const formula = (fm)=> fm.split(/(\d+)/).map((f,idx)=> idx%2 ? <sub key={idx}>{f}</sub> : f)
  return (
    <>
        <NavBar></NavBar>
        <div className='UUID_info'>
            <div className='formula' style={{fontSize:'20vh', color:'#0055d7'}}>
            <div className='lottie_flame' style={{left:'40%', height:'65%'}}>
                <ControlledLottie animationData={atom}> </ControlledLottie>
              </div>

              {formula(info.Formula)}

            </div>

            <div  className='time'>
              <h1 style={{color:'#1455d7'}}>Finished at: </h1>
              <h2 style={{color:'#1455d7'}}>{info.Time }</h2>
              

            </div>

            <div className='molecule_count'>
              <h1>Total Molecule Count</h1>
              <h2>{info.Molecules}</h2>
            </div>

            <div className='spacegroup'>
              <h1>Space Group for the System</h1>
              <h2>{info.space_group}</h2>

            </div>

            <div className='user'>
              <h1 style={{margin:'3.5vh 0 0 0', color:'#3c55d7'}}>Computer: </h1>
              <h2 style={{color:'#3c55d7'}}>{info.Computer}</h2>

            </div>

            <div className='energy' >
            <h1>Component Structure</h1>
            <div className='lottie_flame'>
                <ControlledLottie animationData={flame}> </ControlledLottie>
              </div>
              

              <div>
                <a href={format('https://materialsproject.org/materials?formula={0}',info.Formula)} height={'30%'} title={'MP Structure'}> View MP-structure at MP web</a>
              </div>
              
              
            </div>

            <div className='type'>
              <h1 style={{color:'#2855d7'}}>Type:</h1>
              <h2 style={{color:'#2855d7'}}>{info.Cal_Type}</h2>

            </div>

            <div className='cell'>
              <h1>Process Map</h1>
              <ModalImage 
              small={img_url}
              large={img_url}
              alt={'Process Map'}
              hideDownload={true}
              hideZoom={true}
              
              />
              

            </div>

            
            
          </div>
    
    </>
  )
}
