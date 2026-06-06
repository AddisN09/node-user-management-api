const mysql=require('mysql2/promise');

async function connectDb(){
    return mysql.createConnection({
        host:process.env.host,
        user:process.env.user,
        password:process.env.password,
        database:process.env.database
    });
}

module.exports=connectDb;