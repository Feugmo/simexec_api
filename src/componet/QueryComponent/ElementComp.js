
import { useState } from 'react'
import { format } from 'react-string-format'
export const ElementComp=  ()  => {
    const [structures,setStrucutres]=useState('[{"Space_G":"None","Formula":"NONE","Cal_Type":"None","Energy":"None","UUID":"None"}]')
    const [element, setElement]=useState('')
    const [validate,setValidate]=useState(false)
    const [convex,setConvex]=useState('{"ratio":[0],"type":"Undefined"}')
  
    const update_elemnt = e =>{
        setElement(e.target.value)
      }

      const fetch_res = async (element)=>{
        if (element.length<3 || element.includes("-")){
          try{
            const response = await fetch(format("http://localhost:8001/get/filtered/element/{0}",element))
            const structure_data = await response.json()
            setStrucutres(structure_data)
            const conv = await fetch(format("http://localhost:8001/get/filtered/element/{0}/count",element))
            const conv_data = await conv.json()
            setConvex(conv_data)
            setValidate(true)
          }
          catch(error){
            console.log(error)
            setValidate(false)
          }
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