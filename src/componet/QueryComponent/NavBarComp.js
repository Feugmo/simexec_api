
import {useNavigate} from 'react-router-dom';

export const NavBarComp = () => {
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
    query_element,query_energy,process_status,test_page
    
  )
}
export default NavBarComp