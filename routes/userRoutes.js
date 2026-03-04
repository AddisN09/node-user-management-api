const {getUser,getUserById,createUser,deleteUser}=require('../controller/userController.js');

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
}
module.exports={userRoutes};