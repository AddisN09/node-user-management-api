function validateUserData(req,res,next){
     let { f_name, l_name, age, sex } = req.body;
     if(!f_name||!l_name||!age||!sex){
        res.status(400).json({message:`All filedes must be provided`});
     }
     next();
}
module.exports={validateUserData};