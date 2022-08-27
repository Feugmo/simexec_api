import React from 'react'
import {Routes, Route, useNavigate} from 'react-router-dom';
import '../CSS/App.css'
import '../CSS/Button.css'
import { Query } from './ElementQuery';
import {motion} from 'framer-motion'
import { EnergyQuery } from './EnergyQuery';
export const Home = () => {
  const navigate = useNavigate();
  const query_element= () => {
    
    navigate('/query/element')
  }
  const query_energy= () => {
    
    navigate('/query/energy')
  }
  // const buttonV={
  //   hover : {
  //     x:30,
  //     scale: 1.5,
  //       originX:0,
  //       textShadow: "0px 0px 8px rgb(255,255,255)",
  //     transisiton:{
  //       yoyo:10 //time it repeate Infinitetly 
  //     }
  //   }
  // }

  const containerV={
    hidden :{
      opacity: 0,
      x: '100vw'
    },
    visi :{
      opacity: 1,
      x:0,
      //when: "beforeChildren" will make this animation go before "afterChildren" 
      // mass: decrease sprinting
      // stagger delay between transition 
      transisiton:{
        
        type: 'spring',
        
        delay: 0.6
      }
    }
  }

  return (

      <motion.div className='card' exit={{x:'-100vw', transisiton:{ease:'easeInOut'}}} style={{justifyContent:'center'}} >
      <motion.h1 
      variants={containerV}
      
      initial="hidden"
      animate="visi"
      className='home' >Aiida Data Query</motion.h1>
      <motion.h2 variants={containerV} initial="hidden" animate='visi' id='home'>A User Interface for Query Aiida Data Base on Calculation Result</motion.h2>
      <span style={{justifyContent:'center'}}>
      <motion.button className='buttonNeu' onClick={query_element}>
        Query On Element
      </motion.button>
      <motion.button className='buttonNeu' onClick={query_energy}>
        Query On Property
      </motion.button>
      </span>
    <Routes>
      <Route path='/query/element' element={<Query/>} />
      <Route path='/query/energy' element={<EnergyQuery/>} />
    </Routes>
    {/* <Loader></Loader> */}
    </motion.div>
    
    
  )
}
