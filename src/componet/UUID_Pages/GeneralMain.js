import React from 'react'
import '../../CSS/App.css'
import '../../CSS/flexbox.css'
import '../../CSS/Button.css'
import ControlledLottie from '../../componet/lottie/Flame'

// import * as flame from '../lottie/Flame.json'
import ModalImage from "react-modal-image";
import * as atom from  '../../componet/lottie/atom.json'
import { format } from 'react-string-format'
export const UUIDDetail = ({info,uuid,fa}) => {


  const img_url=format('http://localhost:8001/get/UUID/cal_graph_pic/{0}',uuid)



  const formula = (fm)=> fm.split(/(\d+)/).map((f,idx)=> idx%2 ? <sub key={idx}>{f}</sub> : f)
  return (
    <>
        

          <div className='UUID_Gen'>
            <div className='formula' style={{fontSize:'22vh', color:'#0055d7', padding:'3vh 0 0 2vh'}}>
            <div className='lottie_flame' style={{left:'40%', height:'65%'}}>
                <ControlledLottie animationData={atom}> </ControlledLottie>
              </div>

              {formula(fa)}

            </div>

            <div  className='Finishedtime'>
              <h1 style={{color:'#1455d7'}}>Finished at: </h1>
              <h2 style={{color:'#1455d7'}}>{info.Ftime }</h2>
              

            </div>

           

            <div className='user'>
              <h1 style={{margin:'0.5vh 0 0 0', color:'#3c55d7'}}>Computer: </h1>
              <h2 style={{color:'#3c55d7', fontSize:'3.5vh'}}>{info.Computer}</h2>

            </div>

            

            <div className='Cal_type'>
              <h1 style={{color:'#2855d7'}}>Type:</h1>
              <h2 style={{color:'#2855d7'}}>{info.Cal_Type}</h2>

            </div>

            <div className='WordDir'>
              <h1 style={{color:'#2855d7'}}>Work Direction:</h1>
              <h2 style={{color:'#2855d7', fontSize:'3.5vh'}}>{info.WorkDir}</h2>

            </div>

            <div className='StartT'>
              <h1 style={{color:'#2855d7'}}>Start Time:</h1>
              <h2 style={{color:'#2855d7'}}>{info.Time}</h2>

            </div>

            <div className='cell' style={{height:"60%", padding:"0.5px 0.5px 0.5px 0.5px"}}>
              <h1 style={{margin:"0 0 0 0"}}>Process Map</h1>
              <ModalImage 
              className="small_preview"
              small={img_url}
              large={img_url}
              alt={'Process Map'}
              hideDownload={false}
              hideZoom={false}
              
              />
            </div>            
            

            {/* <div className='molecule_count'>
              <h1>Total Molecule Count</h1>
              <h2>{info.Molecules}</h2>
            </div>

            <div className='spacegroup'>
              <h1>Space Group for the System</h1>
              <h2>{info.space_group}</h2>

            </div>

            <div className='energy' >
            <h1>Component Structure</h1>
            <div className='lottie_flame'>
                <ControlledLottie animationData={flame}> </ControlledLottie>
              </div>
              

              <div>
                <a href={format('https://materialsproject.org/materials?formula={0}',info.Formula)} height={'30%'} title={'MP Structure'}> View MP-structure at MP web</a>
              </div>
               */}

            

            
            
          </div>


        
    </>
  )
}
