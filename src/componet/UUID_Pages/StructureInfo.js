import React from 'react'
import '../../CSS/App.css'
import '../../CSS/flexbox.css'
import '../../CSS/Button.css'
// import * as atom from  '../../componet/lottie/atom.json'
// import ControlledLottie from '../../componet/lottie/Flame'
import { format } from 'react-string-format'
export const StructureInfo = ({info,fa}) => {
    const formula = (fm)=> fm.split(/(\d+)/).map((f,idx)=> idx%2 ? <sub key={idx}>{f}</sub> : f)
  return (
    <>
        <div className='UUID_info'>
        <div className='formula' style={{fontSize:'20vh', padding:"2vw", background:"#e0fffb"}}>
            {/* <div className='lottie_flame' style={{left:'40%', height:'65%'}}>
                <ControlledLottie animationData={atom}> </ControlledLottie>
              </div> */}

              {formula(fa)}

            </div>

            <div className='density'style={{background:"#efecfe"}}>
                <h1>Desnity: </h1>
                <h2>{info.Density} g·cm⁻³</h2>

            </div>

            <div className='Volume' style={{background:"#efecfe"}}>
                <h1>Volume: </h1>
                <h2>{info.Volume} Å³</h2>

            </div>

            <div className='structurePic' style={{background:"#e0fffb"}}>
                <img src='https://materialsproject.org/assets/images/home/mp_color.png' alt='Atom' width={'100%'} height={'105%'}/>
                <a href={format('https://materialsproject.org/materials?formula={0}',fa)} style={{margin:"7% 0 0 2%", color:"black"}}>Click Me to View MP Structure</a>
            </div>

            <div className='molecule_count' style={{background:"#e0f5ff"}}>
              <h1>Number of atoms</h1>
              <h2>{info.Molecules}</h2>
            </div>

            <div className='spacegroup' style={{background:"#e0f5ff"}}>
              <h1>Space Group for the System</h1>
              <h2>{info.space_group}</h2>

            </div>
        </div>
    </>
  )
}
