import React from 'react'
import { Zoom } from 'react-slideshow-image';
import { useLocation } from 'react-router-dom'
import { UUIDDetail } from '../componet/UUID_Pages/GeneralMain';
import NavBar from './NavBar'
export const GenInfo = () => {
    const {state} = useLocation();
  
  const {id,cal_node} = state;
  const uuid=cal_node
  const indicators = (index) => (<div className="indicator">{index + 1}</div>);
  return (
    <Zoom indicators={indicators}>
        <UUIDDetail id={id} uuid={uuid}></UUIDDetail>
    </Zoom>
  )
}
