const db = require('../backend/database/db');

 const fun=()=>{db.query(`insert into employee(name,age) values ("rewe",24)`)}

module.exports= fun

