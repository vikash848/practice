import {useState,useEffect} from "react";
import axios from "axios";
export default function Page() {

const [data,setData]=useState([]);
    const [list,setList]=useState([])
    const [page,setPage]=useState(1);
  useEffect(()=>{
      axios.get("https://jsonplaceholder.typicode.com/posts").then(res=>{
          setData(res.data);
       setList(res.data.filter(e=>(e.id>0 && e.id<10)));
      }).catch(err=>console.log(err))
      
  },[])  
    useEffect(()=>{
    setList(data.filter(e=>(e.id>(page-1)*10 && e.id<(page)*10)));
    },[page])
  return <div>
      <div>{list.map(e=>{
      return<div>
          <h3>{e.id}</h3>
      <div>{e.title}</div>
      </div>
      })}</div>
        <button disabled={page<=1} onClick={()=>setPage(page-1)}>Previous</button>
      {page}
      <button disabled={page*10>data.length-1} onClick={()=>setPage(page+1)}>Next</button>
  </div>
}
