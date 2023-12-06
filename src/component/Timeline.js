import axios from 'axios';
import React, { useState } from 'react'
import Bar from './Bar'
import reactHorizontalTimeline from 'react-horizontal-timeline';

const Timeline = () => {
    const [project,setProject]=useState("");
    const [country,setCountry]=useState("");
    const [data,setData]=useState("")
   const handleClick=()=>{
    if(project==" " || country=="")
    {
        alert("please give the details")
    }
    else{
        
    axios.get(`http://localhost:5000/api/timeline/data/${country}/${project}`).then(res=>setData(res.data.final)).catch(err=>console.log(err))
   }}

    
   console.log(project,country);
    //const data=[20,70,40,50,60];
  return (
    <div>
      <reactHorizontalTimeline/>
      
        <label>Enter Country</label>
        <input value={country} onChange={(e)=>setCountry(e.target.value)}/>
        <label>Enter Project Name</label>
        <input value={project} onChange={(e)=>setProject(e.target.value)}/>
        <button onClick={handleClick}>Show Bar</button>
        {(data!="")&& <Bar data={data}/>}
    </div>
  )
}

export default Timeline