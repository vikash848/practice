import axios from 'axios'
import React, { useEffect, useState } from 'react'

const PracticeTable = () => {
    const [data,setData]=useState([]);
    const [user,setUser]=useState(null);
    const [number,setNumber]=useState(1);
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users").then(res=>setData(res.data)).catch(err=>console.log(err))
    },[])
    console.log(user);
  return (
    <div>
        <h2>Practice Table</h2>
        {data.filter(e=>(e.id>(number-1)*3)&& e.id<=number*3).map(e=>{
            return<div key={e.id} style={{width:"40%"}}>
                <h4 onMouseEnter={()=>setUser(e)} onMouseLeave={()=>setUser(null)}>{e?.name}</h4>
            </div>
        })}
        <button disabled={number<2} onClick={()=>setNumber(number-1)}>Previous</button>{number}<button disabled={number*3>=data?.length} onClick={()=>setNumber(number+1)}>Next</button>
        {user && <div>
            <h3>Employee Details</h3>
            <h4>Name : {user?.name}</h4>
            <div>Email : {user?.email}</div>
            <div>Username : {user?.username}</div>
            </div>}
    </div>
  )
}

export default PracticeTable;