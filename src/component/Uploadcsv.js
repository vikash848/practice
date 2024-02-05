import axios from 'axios'
import React, { useState } from 'react'

const Uploadcsv = () => {
    const [file,setFile]=useState(null)
    const [text,setText]=useState("")
    const name="vikash,cool"
    const handleChange=(e)=>{
        console.log("file log")
        console.log(e.target.files[0])
        setFile(e.target.files[0])
    }
    const uploadFile=()=>{
     
      const formData = new FormData();
      formData.append("name", "CSV File");
      formData.append("file", file);
    axios.post("http://localhost:5000/api/file/sendfile",formData,{headers:{
      'Content-Type': 'application/x-www-form-urlencoded'
    }}).then(res=>console.log(res.data)).catch(err=>console.log(err));
   // axios.post("http://localhost:5000/api/file/sendfile",{text:text}).then(res=>console.log(res.data)).catch(err=>console.log(err))

    }
  return (
    <div>
        <h2>Upload CSV files</h2>
        <div>{name}</div>
        <input type='file' onChange={handleChange}/>
        <input type='text' onChange={(e)=>setText(e.target.value)}/>
        <button onClick={uploadFile}>Upload File</button>
    </div>
  )
}

export default Uploadcsv;