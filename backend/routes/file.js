const express = require("express");
const router = express.Router();
const csv = require('csv-parser')
const fs = require('fs');
const multer = require("multer");


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`)
    }
  })

  const upload = multer({ storage })


//not working
router.post("/sendfile",upload.single("csvfile"),(req,res)=>{
    try{
    console.log("send file")
    console.log(req.body)
    console.log("files",req?.files)
    req.body.file.pipe(fs.createWriteStream("/temp/my.txt"));
    }catch(err){
        return res.send(err)
    }
    return res.send("cool");
})

//working
//used in form
router.post("/sendcsvfile",upload.single("csvfile"),(req,res)=>{
console.log("file",req.file);
console.log("body",req.body)

let count=0;
const readStream=fs.createReadStream(`./uploads/${req.file.filename}`)
let unprocessed='';
let startIndex=18;

readStream.on("data",(chunk)=>{
    console.log("I am at 18"+chunk[18])
    chunk=unprocessed+chunk;
    unprocessed='';
for(let ch=startIndex;ch<chunk.length;ch++){

if(chunk[ch]=='\n'){
    count++;
    let dataString=chunk.slice(startIndex,ch)
    let dataArray=dataString.split(",")
    console.log("cool"+dataArray[5])
    startIndex=ch+1;
}
}
if(chunk[chunk.length-1]!="\n"){
    unprocessed=chunk.slice(startIndex,chunk.length)
    startIndex=0;
}
})

readStream.on("end",()=>{
    console.log("total count is "+count);
})






res.redirect("http://localhost:3000/uploadcsvfile")
})
module.exports=router;