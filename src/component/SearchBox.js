import React, { useEffect, useState } from "react";
import Bar from "./Bar";

const SearchBox = () => {
  const data = ["cat","cow","dog","elephant","horse","hippo"];
  const [fdata, setFdata] = useState([]);
  const [selected,setSelected]=useState([])
  const [text, setText] = useState("");

  const handleOnChange = (e) => {
    setText(e.target.value) 
    const txt=(e.target.value).toUpperCase();
    console.log("txt",txt)
    if(!txt.length){
      setFdata([])
      return;
    }
    setFdata(data.filter(e=>{ 
      console.log(e)
     return !(txt.localeCompare(e.substring(0,txt.length).toUpperCase()))
    }))
   };

   const remove=(data)=>{
   setSelected(selected.filter(e=>e!=data))
   }
   const add=(data)=>{
   if(!selected.find(e=>e==data)){
    setSelected(selected.concat(data))
   }
  }
   
   
  console.log("text",text)
  console.log("data",data);
  console.log("fdata", fdata);
  console.log("selected",selected);
  
  return (
    <div>
      <input style={{width:"300px", height:"40px",marginBottom:"20px"}} value={text} placeholder="search for products,brands and many more" onChange={handleOnChange}/>
      <div>{selected.map(e=><span style={{padding:"10px",boxSizing:"border-box", borderRadius:"30%",marginRight:"5px", border:"1px solid black"}}>{e+"   "}<button style={{borderRadius:"50%",height:"30px"}} onClick={()=>remove(e)}>X</button></span>)}</div>
      <div>{fdata?.length && fdata.map((e) => <p onClick={()=>add(e)}>{e}</p>)}</div>
    </div>
  );
};

export default SearchBox;
