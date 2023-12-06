const express = require("express");
const router = express.Router();
const db = require("../database/db");






router.get("/data/:country/:projectname",(req,res)=>{
    const country=req.params["country"];
    const projectname=req.params["projectname"];
    
    let final={
        "Administrative":0,
        "Quality":0,
        "Clinical And Non Clinical":0,
        "Launch":0,
        "Approval":0
    };
    let Administrative=0;
    let Launch=0;
    db.query(`select * from timeline where Country='${country}' and project_name='${projectname}' `,(error,result)=>{
        if(error)
        {
            return res.send(error)
        }
       result.map(e=>{
        const s=new Date(e.startDate)
        const end=new Date(e.endDate)
        // final[`${e.Category}`]= final[`${e.Category}`]+(end-s);

         final[e.Category]= final[e.Category]+Math.abs(end-s)/(1000 * 3600 * 24);;
       // console.log(e.Category==="Administrative")
        //  if(e.Category==="Administrative")
        //  {
        //    Administrative= Administrative + Math.abs(end-s)/(1000 * 3600 * 24);
        //    console.log("Admin",(Math.abs(end-s)/(1000 * 3600 * 24)));
        //    console.log(typeof(Administrative))
        //    console.log(Administrative)
         }
        //  if(e.Category=="Launch")
        //  {
        //     Launch=Launch+(Math.abs(end-s)/(1000 * 3600 * 24));
        //  }
        
         //console.log(e.Category +"  ccoooolll " +(end-s))
       //}
       )
       res.send({final})
    })
    //console.log(Administrative,"fffAdministrative")
    //console.log("coool")
   // res.send({Administrative,Launch});
    // console.log("result",result)
    // res.send(result)
    //  } )
})




module.exports = router;