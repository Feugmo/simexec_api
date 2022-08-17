import React from 'react'
import '../../CSS/App.css'
import '../../CSS/flexbox.css'
import '../../CSS/Button.css'
import * as atom from  '../../componet/lottie/atom.json'
import ControlledLottie from '../../componet/lottie/Flame'
export const StructureInfo = ({info,fa}) => {
    const formula = (fm)=> fm.split(/(\d+)/).map((f,idx)=> idx%2 ? <sub key={idx}>{f}</sub> : f)
  return (
    <>
        <div className='UUID_info'>
        <div className='formula' style={{fontSize:'20vh', color:'#0055d7'}}>
            <div className='lottie_flame' style={{left:'40%', height:'65%'}}>
                <ControlledLottie animationData={atom}> </ControlledLottie>
              </div>

              {formula(fa)}

            </div>

            <div className='density'>
                <h1>Desnity: </h1>
                <h2>{info.Density} g·cm⁻³</h2>

            </div>

            <div className='Volume'>
                <h1>Volume: </h1>
                <h2>{info.Volume} Å³</h2>

            </div>

            <div className='structurePic'>
                <img src='https://www.nottingham.ac.uk/PressReleaseLongForm-Images/Science/Atompic.x2537f9a6.jpg' alt='Atom' width={'85%'} height={'85%'}/>
            </div>

            <div className='molecule_count'>
              <h1>Total Molecule Count</h1>
              <h2>{info.Molecules}</h2>
            </div>

            <div className='spacegroup'>
              <h1>Space Group for the System</h1>
              <h2>{info.space_group}</h2>

            </div>
        </div>
    </>
  )
}
