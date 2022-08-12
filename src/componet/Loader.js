import React from 'react'
import {motion} from 'framer-motion'
import '../CSS/App.css'
export const Loader = () => {
    const loaderV={
        animateOne:{
            x:[-20,20],
            y:[0,-30],
            transition:{
                x:{
                    yoyo: Infinity,
                    duration:0.5,
                    ease: 'easeOut'
                },
                y:{
                    yoyo: Infinity,
                    duration:0.25,
                    ease: 'easeOut'
                }
            }
        }
    }
  return (
    <motion.div className='loader' variants={loaderV} animate="animateOne"></motion.div>
  )
}

export default Loader;
