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
            <div className='formula' style={{fontSize:'22vh',  padding:'8vh 2vw 2vw 2vw',background:"#e0f5ff"}}>
            <div className='lottie_flame' style={{left:'40%', height:'65%'}}>
                <ControlledLottie animationData={atom}> </ControlledLottie>
              </div>

              {formula(fa)}

            </div>

            <div  className='Finishedtime' style={{background:"#efecfe"}}>
              <h1 >Finished at: </h1>
              <h2 >{info.Ftime }</h2>
              

            </div>

           

            <div className='user'style={{background:"#e0fffb"}}>
              <h1 style={{margin:'0.5vh 0 0 0'}}>Computer: </h1>
              <h2 style={{fontSize:'3.5vh'}}>{info.Computer}</h2>

            </div>

            

            <div className='Cal_type'style={{background:"#e0fffb"}}>
              <h1 >Type:</h1>
              <h2 >{info.Cal_Type}</h2>

            </div>

            <div className='WordDir' style={{background:"#e0f5ff"}}>
              <h1 >Work Direction:</h1>
              <h2 style={{fontSize:'3.5vh'}}>{info.WorkDir}</h2>

            </div>

            <div className='StartT' style={{background:"#efecfe"}}>
              <h1 >Start Time:</h1>
              <h2 >{info.Time}</h2>

            </div>

            <div className='cell' style={{height:"60%", padding:"0.5px 0.5px 0.5px 0.5px",background:"#e0f5ff"}}>
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
