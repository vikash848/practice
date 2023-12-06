import React, { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";

// const Throttle = () => {
//     const [text,setText]=useState("")
//     const [ttext,setTtext]=useState("")
//     const [change,setChange]=useState(true)
//     const timer=useRef(0)
//     useEffect(()=>{
//         if(timer.current){
//             return
//         }
//         const val=text;
//      timer.current=setTimeout(() => {

//         setTtext(val)
//         timer.current=0;
//      }, 2000);
//     //  return(()=>{
//     //     clearTimeout(timer.current)
//     //     timer.current=0;
//     //  })
//     },[text])
//     console.log(timer)
//   return (
//     <div>
//         <h2>Throttling</h2>
//         <input value={text} onChange={(e)=>setText(e.target.value)}/>
//         <h4>Throttle Text : {ttext}</h4>
//     </div>
//   )
//}

const Throttle = () => {

  const [text,setText]=useState("");
  const ref=useRef();
  const handleChange=(e)=>{
   setText(e.target.value)
   //console.log("ref"+ref.current)
  let out=e.target.value;
  if(!ref.current){
    
   ref.current=setTimeout(()=>{
    let apiText=e.target.value;
    console.log("Api Call"+apiText+"out"+out+"state value"+text)
    ref.current=undefined;
   },[3000])
  }

  }
  return (
    <div>
      <h2>Throttle</h2>
      <input type="text" value={text} onChange={handleChange}/>
    </div>
  );
};

export default Throttle;
