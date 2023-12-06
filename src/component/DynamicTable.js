import React, { useState,useEffect } from 'react'
import axios from 'axios'
import { DTable } from '../styledComponents/Table'


const DynamicTable = () => {

    const [list,setList]=useState([])
    const [data,setData]=useState([])
    const [filtered,setFiltered]=useState([])
    const num=filtered.length;

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

      const selectColumn=(val)=>{
      //filtered.includes(val)?setFiltered(filtered.filter(e=>e!=val)):setFiltered(filtered.concat(val));
      //setFiltered(filtered.sort());
      filtered.includes(val)?setFiltered(filtered.filter(e=>e!=val).sort()):setFiltered(filtered.concat(val).sort());
      }
  return (
    <div>
    <h2>Dynamic Table</h2>
    <h3>Filter</h3>
   
    <div>
        {list.map(e=>{
            return<div key={e} onClick={()=>selectColumn(e)}>
                <input type='checkbox' checked={filtered.includes(e)} name={e} /><label htmlFor={e}>{e}</label>
            </div>
        })}
    </div>
    <button onClick={()=>console.log(filtered)}>Show</button>
    <button onClick={()=>{setFiltered(filtered.sort())}}>SORT</button>
    {/* <DTable num={num}>
       {data.map(e=>{
        return 
       })}
    </DTable> */}
    <DTable num={num}>
        {filtered.map(e=>{
          return <h3 style={{border:"1px solid black",padding:"3px"}}>{e}</h3>
        })}
    </DTable>
    <div>
        {data?.map(e=>{
            return<DTable num={num}>
                {filtered.map(ele=>{
                    return <div style={{border:"1px solid black",padding:"3px"}}>{e[ele]}</div>})}
            </DTable>
        })}
    </div>
    </div>
  )
}

export default DynamicTable;