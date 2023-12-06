import React, { useState } from 'react'

const Enter = () => {
    const [text,setText]=useState("")
    const handleOnChange=(e)=>{
        setText(e.target.value)
        console.log(e.key)
        console.log("cool")
        console.log("event",e)
    }
    const checkEnter=(e)=>{
    if(e.key=="Enter")
    {
      alert("Enter is hited")
    }
    }
  return (
    <div>
        <input onChange={(e)=>handleOnChange(e)}  onKeyDown={checkEnter} value={text}/>
    </div>
  )
}

export default Enter