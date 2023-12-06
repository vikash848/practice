import React from "react";

const UploadFile = () => {
    const onChange=(e)=>{
      let files=e.target.files 
      console.log(files[0])
    }
  return (
    <div>
      <h2>UploadFile</h2>
      <input type="file" name="file" onChange={(e)=>onChange(e)}/>
    </div>
  );
};

export default UploadFile;
