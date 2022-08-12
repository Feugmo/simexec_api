import React from 'react'
import '../CSS/App.css'
import '../CSS/flexbox.css'
import '../CSS/Button.css'
import { ProcessStatus } from '../Page/ProcessStatus'
import {Routes, Route} from 'react-router-dom';
import { EnergyQuery } from '../Page/EnergyQuery';
import { Query } from '../Page/ElementQuery';
import { TestPage } from '../Page/TestPage';
import {useNavigate} from 'react-router-dom';

export const NavBar = () => {
  
  const navigate = useNavigate();
  const query_element= () => {
      
      navigate('/query/element/*')
  }
  const query_energy= () => {
  
  navigate('/query/energy/*')
}
const process_status= () => {
  
  navigate('/query/get_process/*')
  console.log("click")
}

const test_page= () => {
  
  navigate('/test')
}
    
    
  return (

      <div className='Nav_bar_cont'>
        <div className='Nav_bar_bx0'>
            <p className='logo-font'>AQI</p>
        </div>
        <div className='Nav_bar_bx1'>
          <button className='button_Nav'onClick={process_status}>Status</button>
        </div>
        <div className='Nav_bar_bx1'>
          <button className='button_Nav'onClick={test_page}>Test</button>
        </div>
        <div className='Nav_bar_bx1'>
        <div className='dropdown'><button className='dropbtn'>Query
          <div className="dropdown-content">
            <p onClick={query_element}>Query On Element</p>
            <p onClick={query_energy}>Query On Energy</p>
              </div>
          </button>
          </div>
          
        </div>
        <div className='Nav_bar_bx1'>
            <button className='button_Nav'>About</button>
          </div>
    
    
    

<Routes>
  <Route path='/query/element/*' element={<Query/>} />
  <Route path='/query/energy/*' element={<EnergyQuery/>} />
  <Route path='/query/get_process/*' element={<ProcessStatus/>} />
  <Route path='/test' element={<TestPage/>} />
</Routes>
</div>
    

  )
}
export default NavBar