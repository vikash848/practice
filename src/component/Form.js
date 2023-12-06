import React, { useEffect, useState } from "react";
import axios from "axios";
const Form = () => {
  const [data, setData] = useState({ name: "", age: 0 });
  const [list, setList] = useState([]);
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const handleClick = async() => {
     await axios
      .post("http://localhost:5000/postdata", data)
      .then(console.log("successfull"))
      .catch((error) => console.log(error));
    getData();  
  };
  const getData=()=>{
    axios
      .get("http://localhost:5000/getdata")
      .then((response) => setList(response.data))
      .catch((error) => console.log("getData", error));
  }
  console.log(data);
  useEffect(() => {
    getData()
  },[]);
  return (
    <div>
      <h2>Form</h2>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        value={data.name}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="age">Age</label>
      <input
        type="number"
        id="age"
        name="age"
        value={data.age}
        onChange={handleChange}
      />
      <button onClick={handleClick}>Submit</button>
      <div>{list.length && list.map(e=><p>{e.name}</p>)}</div>
    </div>
  );
};

export default Form;
