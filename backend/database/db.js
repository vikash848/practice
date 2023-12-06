var mysql = require("mysql");

var db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "admin",
  database: "database2",
});


module.exports =  db ;
