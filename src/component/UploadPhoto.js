import React, { useState } from "react";
import axios from "axios";

const UploadPhoto = () => {
  const [image, setImage] = useState();
  const [src, setSrc] = useState("");
  const formData = new FormData();
  const handleChange = (e) => {
    setImage(e.target.files[0]);
  };

  const upload = () => {
    formData.append("file", image);
    formData.append("upload_preset", "my_preset");
    formData.append("public_id", image.name);

    axios
      .post("https://api.cloudinary.com/v1_1/vikash87/image/upload", formData)
      .then((response) => {
        console.log("response", response);
        setSrc(response.data.secure_url);
      });
  };
  console.log(process.env.REACT_APP_API_KEY);
  console.log(image);
  return (
    <div>
      <input type="file" onChange={handleChange} />
      <button onClick={upload}>Upload</button>
      <img src={src} alt="cool" />
    </div>
  );
};

export default UploadPhoto;
