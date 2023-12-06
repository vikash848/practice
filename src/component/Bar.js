import React from "react";

const Bar = (props) => {
  const data = Object.values(props.data);
  const name=Object.keys(props.data);
  const colors = ["red", "blue", "green", "yellow", "purple"];
  console.log("values",data);
  let total = 0;
  for (let i = 0; i < data.length; i++) {
    total = total + data[i];
  }
  let i = -1;
  return (
    <div
      style={{
        width: "90%",
        height: "30px",
        border: "1px solid black",
        display: "flex",
        marginTop:"40px",
        margin: "auto",
      }}
    >
      {data?.map((e) => {
        i++;
        return (
          <div
            style={{
              width: `${((e * 50) / total)+10}%`,
              height: "100%",
              backgroundColor: colors[i],
            }}
          >{name[i]}</div>
        );
      })}
    </div>
  );
};

export default Bar;
