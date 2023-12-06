import React, { useEffect, useState } from "react";
import "../App.css";
import axios from "axios";
import DownloadPopup from "./DownloadPopup";

const Table = () => {
  const [list, setList] = useState();
  const [display, setDisplay] = useState(false);
  const [data, setData] = useState();
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setList(res.data))
      .catch((err) => console.log(err));
  }, []);
  const handleClick = (ddata) => {
    setData(ddata);
    setDisplay(true);
  };
  console.log(list);
  return (
    <div>
        {display&&<button onClick={()=>setDisplay(false)} className="close">X</button>}
     
      {display && <DownloadPopup data={data}/>}
      <div style={{opacity:`${display?0.5:1}`}}>
      <h2>Table</h2>
        {list?.length &&
          list.map((e) => {
            return (
              <div key={e.id} className="grid-container">
                <div>{e.name}</div>
                <div>{e.username}</div>
                <div>{e.email}</div>
                <div>
                  <button onClick={()=>handleClick(e)}>Download PDF</button>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Table;
