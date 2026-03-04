const {getUser,getUserById,createUser,deleteUser,send}=require('../controller/userController.js');

async function userRoutes(req,res){
            const method=req.method;
            const requestURL=req.url.split('/');
         if(method==='GET' && req.url==='/user'){
            await getUser(res);
         }
         else if(method==='GET' && requestURL[1]==='user'&&requestURL[2]){
            let id=parseInt(requestURL[2]);
            await getUserById(res,id);
         }
         else if(method==='POST' && req.url==='/user'){
            await createUser(req,res);
         }
          else if(method==='DELETE' && requestURL[1]==='user'&&requestURL[2]){
             let id=parseInt(requestURL[2]);
            await deleteUser(res,id);
         }
         else{
            await send(res,400,{message:`bad request`});
         }
}
module.exports={userRoutes};