const {readFileContent,writeFileContent,findUserById,addUser}=require('../model/userModel.js');
const {hashPassword}=require('../utils/hashPassword.js');

async function send(res,statusCode,data){
    res.writeHead(statusCode,{'Content-Type':'application/json'});
    res.end(JSON.stringify(data,null,2));
    return;
}

async function getUser(res){
    try{
        const allUsers=await readFileContent();
        await send(res,200,allUsers);
    }
    catch(err){
        await send(res,400,{message:`There is an error : ${err}`});
    }
}
async function getUserById(id){
    try{
         const user=await findUserById(id);
         if(!user){
            await send(res,404,{message:`User not found`});
         }
         await send(res,200,user);
    }
    catch(err){
        await send(res,400,{message:`There is an error : ${err}`});
    }
}
async function createUser(body){
    try{
        let user=await findUserById(body.id);
        if(user){
           return await send(res,404,{message:`user alerady exists`});
        }
        const updatedUsers=await addUser(body);
        await writeFileContent(updatedUsers);
        return await send(res,201,{message:`user created successfully`});
    }
    catch(err){
         await send(res,400,{message:`There is an error : ${err}`});
    }
}
async function deleteUser(id){
    try{
      const user=await findUserById(id);
         if(!user){
            await send(res,404,{message:`User not found`});
         }
      const allUsers=await readFileContent();
      allUsers=allUsers.filter(user=>user.id !== id);
      await writeFileContent(allUsers);
      return await send(res,200,{message: `user deleted successfully`});
    }
    catch(err){
         await send(res,400,{message:`There is an error : ${err}`});
    }
}
module.exports={getUser,getUserById,createUser,deleteUser};