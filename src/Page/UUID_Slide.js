import React from 'react'
import { Zoom } from 'react-slideshow-image';
import { useLocation } from 'react-router-dom'
import { UUIDDetail } from '../componet/UUID_Pages/GeneralMain';
import { StructureInfo } from '../componet/UUID_Pages/StructureInfo';
import 'react-slideshow-image/dist/styles.css';
export const GenInfo = () => {
    const {state} = useLocation();
  const infos=["0","General","Structure"];
  const {id,cal_node} = state;
  const uuid=cal_node
  const indicators = (index) => (<div className="indicator" style={{margin:'0'}}>{infos[index + 1]}</div>);
  return (
    <Zoom indicators={indicators} autoplay={false} arrows={false} scale={1.4} canSwipe={true}>
      <div className="each-slide-effect">
        <UUIDDetail info={JSON.parse(id).GeneralInfo} uuid={uuid} fa={JSON.parse(id).Formula}></UUIDDetail>
      </div>
      <div className="each-slide-effect">
        <StructureInfo info={JSON.parse(id).StructureInfo} fa={JSON.parse(id).Formula}></StructureInfo>
      </div>
        
        
    </Zoom>
  )
}
