import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const Debouncing = () => {
    const [text,setText]=useState("")
    const [dtext,setDtext]=useState("")
    useEffect(()=>{
        let timer=setTimeout(()=>{
            setDtext(text)
        },3000)
        return (()=>{
            clearTimeout(timer)
        })
    },[text])
  return (
    <div>
        <h2>Debouncing</h2>
        <input value={text} onChange={(e)=>setText(e.target.value)}/>
        <h4>Debouce Text : {dtext}</h4>
    </div>
  )
}

export default Debouncing