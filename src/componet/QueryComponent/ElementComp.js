
import { useState,useEffect } from 'react'
import { format } from 'react-string-format'
export const ElementComp=  ()  => {
    const [structures,setStrucutres]=useState('[{"Space_G": "(\'P1\', 1)", "Formula": "Mg22 Al10", "Cal_Type": "lammps.optimize", "UUID": "a0038b17-544b-49a9-822f-5df247f29099", "Energy": -66.568}, {"Space_G": "(\'Pm\', 6)", "Formula": "Mg6 Al10", "Cal_Type": "lammps.optimize", "UUID": "86f6a5c6-0698-4829-a95c-42b4ccc195a2", "Energy": -42.199}, {"Space_G": "(\'I4_1/amd\', 141)", "Formula": "Mg8 Al12", "Cal_Type": "lammps.optimize", "UUID": "7566929b-ea96-41b8-985c-c577badbfbff", "Energy": -50.886}, {"Space_G": "(\'I4_1/amd\', 141)", "Formula": "Mg8 Al12", "Cal_Type": "lammps.optimize", "UUID": "44ab8355-578d-4591-90e9-74a99f04750e", "Energy": -50.886}, {"Space_G": "(\'I4_1/amd\', 141)", "Formula": "Mg8 Al12", "Cal_Type": "lammps.optimize", "UUID": "7ed99f77-82d8-4056-828a-8cd81071e2cd", "Energy": -50.886}, {"Space_G": "(\'I4_1/amd\', 141)", "Formula": "Mg8 Al12", "Cal_Type": "lammps.optimize", "UUID": "2de6b5f1-3494-431f-956c-33b6c4edf31d", "Energy": -50.886}, {"Space_G": "(\'I4_1/amd\', 141)", "Formula": "Mg8 Al12", "Cal_Type": "lammps.optimize", "UUID": "ba8e09af-6bf4-4784-999c-d84eec162414", "Energy": -50.886}, {"Space_G": "(\'I4_1/amd\', 141)", "Formula": "Mg8 Al12", "Cal_Type": "lammps.optimize", "UUID": "8304a8b8-9018-4f21-bdd9-d8203c5a1bc8", "Energy": -50.886}]')
    const [element, setElement]=useState('')
    const [validate,setValidate]=useState(false)
    const [convex,setConvex]=useState('{"ratio": [[0.6875, -66.568], [0.375, -42.199], [0.4, -50.886], [0.4, -50.886], [0.4, -50.886], [0.4, -50.886], [0.4, -50.886], [0.4, -50.886]], "type": [[22, 6, 8, 8, 8, 8, 8, 8], [10, 10, 12, 12, 12, 12, 12, 12]]}')
  
    const update_elemnt = e =>{
        setElement(e.target.value)
      }
      const fetch_all =async ()=> {
        const response = await fetch(format("http://localhost:8001/get/filtered/element/All"))
        const structure_data = await response.json()
        setStrucutres(structure_data)
      }
      useEffect(()=>{
            fetch_all();
      },[])

      const fetch_res = async (element)=>{
        if (element.length<3 || element.includes("-")){

            const response = await fetch(format("http://localhost:8001/get/filtered/element/{0}",element))
            const structure_data = await response.json()
            setStrucutres(structure_data)
            const conv = await fetch(format("http://localhost:8001/get/filtered/element/{0}/count",element))
            const conv_data = await conv.json()
            setConvex(conv_data)
            setValidate(true)
          

        }
        else{
          setValidate(false)
        }
      }


    return {
    state : {structures, element,validate,convex},
    update_elemnt,fetch_res
  }
    
  
}

export default ElementComp