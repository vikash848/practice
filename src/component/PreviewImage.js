import React, { useState } from "react";
import axios from "axios";

const PreviewImage = () => {
  const [images, setImages] = useState([]);
  const handleFile = (e) => {
    console.log(e.target.files);
    console.log(e.target.files.length);
    setImages(Array.from(e.target.files));
  };

  const handleSubmit = async () => {
    const data=new FormData()
    data.append("image",images[0])
    const response = await axios.post("http://localhost:5000/upload", {
      name: "viki",
      age: 23,
      file: images,
    });
    const response2 = await axios.post("http://localhost:5000/upload", data);
    console.log("response2",response2);
  };
  console.log("images",images[1])
  return (
    <div>
      <h2>PreviewImage</h2>
      <input type="file" multiple onChange={handleFile} />
      <div>
        {images.length &&
          images.map((e) => {
            const key = URL.createObjectURL(e);
            return (
              <p key={key}>
                <img src={key} />
                <div>{key}</div>
              </p>
            );
          })}
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default PreviewImage;
