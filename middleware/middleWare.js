function requestBody(req){
   return new Promise((resolve,reject)=>{
    let body='';
    req.on('data',chunk=>{
       body+=chunk;
    });
    req.on('end',()=>{
        try{
            resolve(body);
        }
        catch(err){
            reject(err);
        }
    });
    req.on('error',(err)=>{
        reject(err);
    });
   });
}
module.exports={requestBody};