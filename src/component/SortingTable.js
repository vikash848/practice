import { useEffect,useRef,useState } from "react"
import React from 'react'
import axios from "axios"
import { DTable } from "../styledComponents/Table"

const SortingTable = () => {

    const [list,setList]=useState([])
    const [data,setData]=useState([])
    const [filtered,setFiltered]=useState([])
    const [number,setNumber]=useState(5);
    const [flag,setFlag]=useState(true)
    const [prevValue,setPrevValue]=useState(null)
    const num=filtered.length;
    const [array,setArray]=useState(["orange","apple","grape","banana"]);
    const sortFruit=()=>{
        setArray(array.sort())
        console.log(array)
        setFlag(!flag);
    }
    const changeNumber=()=>{
        setNumber(10)
    }
    useEffect(() => {
        axios
          .get("https://jsonplaceholder.typicode.com/users")
          .then((res) => {
            setList(Object.keys(res.data[0]).filter(e=>(e!="address") && (e!="company")).sort()) 
            setFiltered(Object.keys(res.data[0]).filter(e=>(e!="address") && (e!="company")).sort())
            const temp=res.data;
            setData(temp.map(e=>{
                let {address,company,...rest}=e;
                console.log(rest);
                return rest;
            }))
        })
          .catch((err) => console.log(err));
      }, []);
      useEffect(()=>{
        console.log("number value changed")
      },[number])
      const handleClick=(value)=>{
        console.log(value)
        console.log(prevValue);
        console.log(value!=prevValue?1:-1)
       // console.log(data[1][value]>data[2][value])
        setData(data.sort((a,b)=>{
          if(a[value] > b[value])
          {
           // console.log(a[value] - b[value]);\
           console.log(value!=prevValue ? 1:-1)
            return (value!=prevValue ? 1:-1);
           //return -1;
          }
          else{
            console.log(value!=prevValue ? 1:-1)
           return (value!=prevValue ? -1:1);
          //return 1;
          }
            //return a["name"] - b["name"];
        }));
        setPrevValue(value);
       // setFlag(!flag);
      }
//  console.log("data",data);
//  console.log("list",list);
//  console.log("filtered",filtered);
const coolF=()=>{
  return (3!=3)?4:5;
}
const x=coolF();
console.log("X",x);
  return (
    <div>
        <h2>Sorting Table</h2>
        <DTable num={list.length}>{list?.map(e=><h3 onClick={()=>handleClick(e)}>{e}</h3>)}</DTable>
       <div>
        {data.map(ele=>{
            return<DTable num={list.length}>{list.map(e=><p>{ele[e]}</p>)}</DTable>
        })}
       </div>
       <div>{array.map(e=><p>{e}</p>)}</div>
       <button onClick={sortFruit}>Sort Array</button>
       <h3>{number}</h3>
       <button onClick={changeNumber}>Change number</button>
    
    </div>
  )
}

export default SortingTable