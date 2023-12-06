import React, { useRef } from "react";
import "../App.css";
import ReactToPrint from "react-to-print";

const DownloadPopup = ({ data }) => {
  console.log(data);

  const componentRef = useRef();
  return (
    <div className="modal">
      
      <div ref={componentRef}>
        <h2>{data.name}</h2>
        <h3>{data.username}</h3>
        <div className="grid-container">
          <div>{data.id}</div>
          <div>{data.company.name}</div>
          <div>{data.phone}</div>
          <div>{data.website}</div>
        </div>
      </div>
      <ReactToPrint
        trigger={() => <button className="dbutton">Print</button>}
        content={() => componentRef.current}
      />
    </div>
  );
};

export default DownloadPopup;
