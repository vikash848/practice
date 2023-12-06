import React,{useRef} from 'react'
import ReactToPrint from 'react-to-print';


// const Downloadpdf = () => {
//   const componentRef=useRef();
//   const handlePrint=  useReactToPrint({
//     content:()=>componentRef.current,
//   })
  
//   return (<>
//     <div>downloadpdf</div>
//     <ComponentToPrint ref={componentRef}/>
//     <button onClick={handlePrint}>Print</button>
//     </>
//   )
// }

const Downloadpdf=()=>{
  const componentRef=useRef();
  return(<div>
    <ReactToPrint
    trigger={()=><button>Print</button>}
    content={()=>componentRef.current}
    />
    <div ref={componentRef}>huuhui</div>
  </div>)
}

export default Downloadpdf;