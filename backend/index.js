const express = require("express");
const app = express();
const bodyParser = require("body-parser");

var cors = require("cors");
const db = require("../backend/database/db");
var fun = require("./func");

require('dotenv').config()
const stripe=require('stripe')(process.env.REACT_APP_STRIPE_SECRET_KEY);
const { v4: uuidv4 } = require('uuid');


const storeItem=new Map([
  [1,{price:100,name:"shoes"}],
  [2,{price:200,name:"shocks"}]
])

app.listen(5000,async()=>{
  try{
    await db;
    console.log("app listening on port 5000")
  }catch(err){
   console.log("server error"+err);
  }
    
})

app.use(cors());


app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/timeline", require("./routes/timeline"));
app.use("/api/file", require("./routes/file"));

// app.listen(5000, () => {
//   console.log("listening on port 5000");
// });

app.get("/photo", (req, res) => {
  res.send("hellllllllo");
});

app.post("/upload", (req, res) => {
  console.log(req.body)
  res.send(req.body);
});
app.get("/getdata", (req, res) => {
  db.query(`select * from employee2`, (result, error) => {
    if (error) {
      return res.send(error);
    }
    res.send(result);
  });
});

app.post("/postdata", (req, res) => {
  db.query(
    `insert into employee4 (name,age) values ('${req.body.name}','${req.body.age}')`,
    (result, error) => {
      if (error) {
        console.log(error);
        res.send(error)
      }
      else{
      console.log(result);
      res.send(result)
    }}
  );
});
app.put("/update", (req, res) => {
  db.query(
    `update  employee set name= '${req.body.name}' where idemployee=${req.body.id}`,
    (result, error) => {
      if (error) {
        console.log(error);
        res.send(error)
      }
      else{
      console.log(result);
      res.send(result)
    }}
  )})
  
  app.post("/payment",(req,res)=>{
    const {product,token}=req.body;
    console.log("product",product);
    console.log("price",product.price);
    const idempotencyKey=uuidv4()
    console.log("token",token);
    return stripe.customers.create({
      email:token.email,
      source:token.source
    }).then(customer=>{
      stripe.charges.create({
        amount:product.price * 100,
        currency:"usd",
        customer:customer.id,
        description:`purchase of book`,
        shipping:{
          name:token.card.name,
          address:{
            country:token.card.address_country
          }
        }
        
      },{idempotencyKey})
    }).then(result=>{
      res.status(200).send(result)
    }).catch(error=>res.send(error))
  })

  // app.post("/insertdata",(req,res)=>{
  //   //console.log(req.body.length)
  //   //console.log(req.body)
  //   let i=0;
  //   while(i<req.body.length)
  //   {
  //     db.query(`insert into user values(${req.body[i].id},'${req.body[i].name}','${req.body[i].username}','${req.body[i].email}','${req.body[i].phone}','${req.body[i].website}')`,(error,result)=>{
  //       if(error)
  //       {
  //         return res.send(error)
  //       }
  //     })
  //     i++;
  //   }
  //   res.send({"success":"success"})
  // })

  app.get("/",(req,res)=>{
    res.send({"hello":"vikash"})
  })

  app.get("/userdata",(req,res)=>{
    db.query(`select * from user `,(error,result)=>{
      if(error)
      {
        return res.send(error)
      }
      res.send(result)
    })
  })

  app.put("/updatetable",(req,res)=>{
    console.log(req.body)
    db.query(`update user set name='${req.body.name}', username='${req.body.username}', email='${req.body.email}', phone='${req.body.phone}', website='${req.body.website}' where iduser=${req.body.iduser}`,(error,result)=>{
      if(error)
      {
        return res.send(error)
      }
      res.send(result)
    })
  })