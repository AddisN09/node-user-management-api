require('dotenv').config();
const express=require('express');
const connectDB=require('./config/db.js');
const {router}=require('./routes/userRoutes.js');

const app=express();

app.use(express.json());
app.use('/users',router);

let connect;

async function start(){
    connect=await connectDB();
    app.locals.connect=connect;
    let port=process.env.port||3000;
    app.listen(port,()=>{
        console.log(`server is running at port ${port}. To stop press ctrl+c`);
    });
}
start();




