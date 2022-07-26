import React from 'react';
import {useState} from "react";

const IncDecCount = () => {
 
    let [num, setNum]= useState(0);
    let incNum =()=>{
      if(num<10)
      {
      setNum(Number(num)+1);
      }
    };
    let decNum = () => {
       if(num>0)
       {
        setNum(num - 1);
       }
    }
   let handleChange = (e)=>{
     setNum(e.target.value);
    }
    
  return (
    <div className='aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12 btn'>
      <button type="button" style={{ borderRadius: "50%", width: "32px", height: "32px", marginRight: "10px", border: "2px solid #91959C" }} onClick={decNum}>-</button>
      {/* <button className='btn-count' onChange={handleChange}>1</button> */}
      <input type="text" style={{ borderRadius: "8px", width: "114px", height: "40px", textAlign: "center", border: "2px solid #91959C" }} value={num} onChange={handleChange} />
      <button type="button" style={{ borderRadius: "50%", width: "32px", height: "32px", marginLeft: "10px", border: "2px solid #91959C" }} onClick={incNum}>+</button>
    </div>
  )
}

export default IncDecCount
