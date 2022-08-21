import React from 'react'
import { GenInfo } from '../../Page/UUID_Slide';
import {Routes, Route, useNavigate} from 'react-router-dom';
//import { format } from 'react-string-format';
export const UUIDInfo = ({node,type_cal}) => {
  const navigate = useNavigate();
  const fetch_detail = async (node) =>{


        // const response = await fetch(format('http://localhost:8001/get/UUID/{0}',node))
        // const uuI=await response.json()
        const uuI='{"Formula": "Si2", "Result_key": ["version", "run_stats", "run_status", "maximum_force", "notifications", "maximum_stress", "total_energies"], "Result_value": ["6.3.0", [["user_time", 140.566], ["system_time", 0.121], ["elapsed_time", 1126.873], ["mem_usage_base", 30000.0], ["mem_usage_grid", 270.0], ["mem_usage_wavefun", 161.0], ["mem_usage_fftplans", 119.0], ["average_memory_used", null], ["maximum_memory_used", 134904.0], ["mem_usage_nonl-proj", 617.0], ["total_cpu_time_used", 140.687], ["mem_usage_one-center", 6.0]], [["nsw", 0], ["nelm", 60], ["nbands", 8], ["finished", true], ["ionic_converged", null], ["contains_nelm_breach", false], ["electronic_converged", true], ["last_iteration_index", [1, 9]], ["consistent_nelm_breach", false]], 0.0, [], 18.16316185, [["energy_extrapolated", -10.79608103], ["energy_extrapolated_electronic", -10.79608103]]], "StructureInfo": {"space_group": "(\'Fd-3m\', 227)", "Molecules": "2", "Chem_System": "Si", "Density": "2.3", "Volume": "40.0"}, "GeneralInfo": {"Cal_Type": "vasp.vasp", "Computer": "graham (graham.computecanada.ca)", "Time": "08/10/22 21:10", "WorkDir": "/scratch/lyuz11/ee/34/8e16-dd33-48d5-b124-d99c12f8da49", "Ftime": "08/10/22 21:33"}}'
        navigate('/query/UUID/detail', {state:{id:uuI , cal_node:node}})
        //const uuI='{"Formula": "Si2", "Result_key": ["version", "run_stats", "run_status", "maximum_force", "notifications", "maximum_stress", "total_energies"], "Result_value": ["6.3.0", [["user_time", 140.566], ["system_time", 0.121], ["elapsed_time", 1126.873], ["mem_usage_base", 30000.0], ["mem_usage_grid", 270.0], ["mem_usage_wavefun", 161.0], ["mem_usage_fftplans", 119.0], ["average_memory_used", null], ["maximum_memory_used", 134904.0], ["mem_usage_nonl-proj", 617.0], ["total_cpu_time_used", 140.687], ["mem_usage_one-center", 6.0]], [["nsw", 0], ["nelm", 60], ["nbands", 8], ["finished", true], ["ionic_converged", null], ["contains_nelm_breach", false], ["electronic_converged", true], ["last_iteration_index", [1, 9]], ["consistent_nelm_breach", false]], 0.0, [], 18.16316185, [["energy_extrapolated", -10.79608103], ["energy_extrapolated_electronic", -10.79608103]]], "StructureInfo": {"space_group": "(\'Fd-3m\', 227)", "Molecules": "2", "Chem_System": "Si", "Density": "2.3", "Volume": "40.0"}, "GeneralInfo": {"Cal_Type": "vasp.vasp", "Computer": "graham (graham.computecanada.ca)", "Time": "08/10/22 21:10", "WorkDir": "/scratch/lyuz11/ee/34/8e16-dd33-48d5-b124-d99c12f8da49", "Ftime": "08/10/22 21:33"}}'

       
  }
  
  return (
    
    <div>
      {type_cal === "FINISHED"?(
        <button className='button_UUID' onClick={()=> fetch_detail(node)}>{node}</button>
        
      ):(<p>{node}</p>)}
      <Routes>
          <Route path='/query/UUID/detail' element={<GenInfo/>}/>
        </Routes>
    </div>
  )
}
