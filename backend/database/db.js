var mysql = require("mysql2/promise");


var db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "admin",
  database: "elearning",
})


module.exports =  db ;
