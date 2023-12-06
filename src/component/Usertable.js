import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState } from 'react';


const Usertable = () => {
const [rows,setRows]=useState([]);    
const [data,setData]=useState();
const [id,setId]=useState(-1);
useEffect(()=>{
axios.get("http://localhost:5000/userdata").then(res=>setRows(res.data)).catch(err=>console.log(err))
},[])

// const insertData=()=>{
//  axios.get("https://jsonplaceholder.typicode.com/users").then(res=>{
//     axios.post("http://localhost:5000/insertdata",res.data).then(res=>console.log(res)).catch(err=>console.log(err))
// }).catch(err=>console.log(err))
// }

const update=()=>{
    axios.put("http://localhost:5000/updatetable",data).then(res=>{
    setRows(rows.filter(e=>e.iduser!=id).concat(data).sort((a,b)=>{return a.iduser-b.iduser}))    
    setId(-1)
}).catch(err=>console.log(err))
}

const handleChange=(e)=>{
setData({
    ...data,
    [e.target.name]:e.target.value
})
}
console.log("data",data)
  return (
<div>
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>ID</TableCell>
          <TableCell align="right">Name</TableCell>
          <TableCell align="right">UserName</TableCell>
          <TableCell align="right">Email</TableCell>
          <TableCell align="right">Phone</TableCell>
          <TableCell align="right">Website</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => {
           return (row.iduser==id? 
            <TableRow
            
            key={row.iduser}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {row.iduser}
            </TableCell>
            <TableCell align="right"><input style={{"float":"right"}} name='name'  onChange={handleChange} value={data.name} width='100%' height='100%'/></TableCell>
            <TableCell align="right"><input name='username' onChange={handleChange} value={data.username} width='100%' height='100%'/></TableCell>
            <TableCell align="right"><input name='email' onChange={handleChange} value={data.email} width='100%' height='100%'/></TableCell>
            <TableCell align="right"><input name='phone' onChange={handleChange} value={data.phone} width='100%' height='100%'/></TableCell>
            <TableCell align="right"><input name='website' onChange={handleChange} value={data.website} width='100%' height='100%'/></TableCell>
          </TableRow>
          :
          <TableRow
          onDoubleClick={()=>{
            setId(row.iduser)
            setData(row)
        }}
          onClick={()=>console.log(row.iduser)}
            key={row.iduser}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {row.iduser}
            </TableCell>
            <TableCell align="right">{row.name}</TableCell>
            <TableCell align="right">{row.username}</TableCell>
            <TableCell align="right">{row.email}</TableCell>
            <TableCell align="right">{row.phone}</TableCell>
            <TableCell align="right">{row.website}</TableCell>
          </TableRow>
) } )}
      </TableBody>
    </Table>
  </TableContainer>
 {(id!=-1) && <>
 <button onClick={update}>SAVE</button>
  <button onClick={()=>setId(-1)}>CANCEL</button></>
}</div>
  )
}

export default Usertable