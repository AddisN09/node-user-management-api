require('dotenv').config();
const http=require('http');
const{userRoutes}=require('./routes/userRoutes.js');
const server=http.createServer(async (req,res)=>{
    await userRoutes(req,res);
});
server.listen(8080,()=>{
    console.log(`server is listening at port 8080`);
});