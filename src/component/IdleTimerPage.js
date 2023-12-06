import React, { useEffect, useRef } from 'react'
import { ToastClassName,ToastContainer,toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const IdleTimerPage = () => {

 const timeoutRef=useRef(null) 
 const alertRef=useRef(null)

const handleEvent=()=>{
//  console.log("cooool")
clearTimeout(timeoutRef.current);
timeoutRef.current=setTimeout(()=>{
  console.log("You are logged out")
},5000)
clearTimeout(alertRef.current);
alertRef.current=setTimeout(()=>{
  toast("You will be logged out after 2 second")
},3000)
}
useEffect(()=>{
  handleEvent();
window.addEventListener("scroll",handleEvent);
window.addEventListener("keydown",handleEvent);
window.addEventListener("mousemove",handleEvent);
window.addEventListener("mouseenter",handleEvent);

return ()=>{
window.removeEventListener("scroll",handleEvent);
window.removeEventListener("keydown",handleEvent);
window.removeEventListener("mousemove",handleEvent);
window.removeEventListener("mouseenter",handleEvent);
}
},[])

  return (
    <div>
        <h2>IdleTimerPage</h2>
        <ToastContainer position="top-center" draggable
pauseOnHover theme="light"/>
    </div>
  )
}

export default IdleTimerPage