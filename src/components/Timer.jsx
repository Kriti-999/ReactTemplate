import React from "react";
import CountDown from "./CountDown";

import { CircularProgressbar } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';

function Timer(props) {
    const percentage = 90;
    return(<div style={{display:"flex",marginTop:"-15px"}}>
     
        <CountDown session={props.session}/>
        <div style={{ width: "35%", marginLeft:"6px"}}>
        <CircularProgressbar  className="progressBar" value={percentage} text={`${percentage}%`} />
    </div>
      
    </div>
  
    )
        


};
export default Timer;