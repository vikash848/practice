

import React from "react";
import { useEffect } from "react";

const  CloudinaryUploadWidget=()=>  {
  var myWidget
  useEffect(()=>{
    myWidget = window.cloudinary.createUploadWidget(
      {
        cloudName: "vikash87",
        uploadPreset: "my_preset"
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          console.log("Done! Here is the image info: ", result.info);
        }
      }
    );
  },[])
   
    const handleClick=()=> {
        myWidget.open();
      }
     
  

  console.log(window)
    return (
      <button id="upload_widget" className="cloudinary-button" onClick={handleClick}>
        Upload
      </button>
    );
  }


export default CloudinaryUploadWidget;
