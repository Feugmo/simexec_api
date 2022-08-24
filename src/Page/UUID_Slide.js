import React from 'react'
import { Zoom } from 'react-slideshow-image';
import { useLocation } from 'react-router-dom'
import { UUIDDetail } from '../componet/UUID_Pages/GeneralMain';
import { StructureInfo } from '../componet/UUID_Pages/StructureInfo';
import { UUResult } from '../componet/UUID_Pages/UUResult';
import 'react-slideshow-image/dist/styles.css';
import {NavBar} from '../componet/NavBar'
export const GenInfo = () => {
    const {state} = useLocation();
  const infos=["0","General","Structure","Result"];
  const {id,cal_node} = state;
  const uuid=cal_node
  const indicators = (index) => (<div className="indicator" style={{margin:'0'}}>{infos[index + 1]}</div>);
  return (
    <>
    <NavBar></NavBar>
    <Zoom indicators={indicators} autoplay={false} arrows={false} scale={1.4} canSwipe={true}>
      <div className="each-slide-effect">
        <UUIDDetail info={JSON.parse(id).GeneralInfo} uuid={uuid} fa={JSON.parse(id).Formula}></UUIDDetail>
      </div>
      <div className="each-slide-effect">
        <StructureInfo info={JSON.parse(id).StructureInfo} fa={JSON.parse(id).Formula}></StructureInfo>
      </div>
      <div className="each-slide-effect">
        <UUResult result_key={JSON.parse(id).Result_key}result_value={JSON.parse(id).Result_value} rlist={JSON.parse(id).Retrived_list}></UUResult>
      </div>
        
    </Zoom>
    </>
  )
}
