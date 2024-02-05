import React from 'react'

const Uploadcsvfile = () => {
  return (
    <div>
        <h3>Upload CSV File</h3>
        <form action='http://localhost:5000/api/file/sendcsvfile'  method="post" enctype="multipart/form-data">
         <input type='file' name='csvfile'/>
         <input type="submit" />
        </form>
    </div>
  )
}

export default Uploadcsvfile;