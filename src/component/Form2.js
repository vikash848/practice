import React, { useRef, useState } from 'react'

const Form = () => {
    const [data,setData]=useState({name:"v",age:1})
    const inputRef=useRef()
    const handleChange=(e)=>{
        setData({
            ...data,
            [e.target.name]:e.target.value
        })
    }
   
    console.log(inputRef.current)
  return (
    <div>
        <h2>Form</h2>
        <label htmlFor='name'>Name</label>
        <input ref={inputRef} type='text' id="name" name="name" value="vika" onChange={handleChange}/>
        <br/>
        <label htmlFor='age'>Age</label>
        <input type='text' id="age" name="age" value={data.age} onChange={handleChange}/>
    </div>
  )
}

export default Form