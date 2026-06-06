const { createUser, getAllUsers, getUser, deleteAllUsers, deleteUser, updateUserPATCH, updateUserPUT } = require('../model/userModel.js');


async function createUserController(req, res) {
    try {
        let newUser = req.body;
        const connection = req.app.locals.connect;
        let result = await createUser(newUser, connection);
        res.status(201).json(result);
    }
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
}
async function getUserController(req, res) {
    try {
        const userId = parseInt(req.params.id);
        const connection = req.app.locals.connect;
        const user = await getUser(userId, connection);
        res.status(200).json(user);

    }
    catch (err) {
        res.status(500).json(err);
    }
}
async function getAllUsersController(req, res) {
    try {
        const connection = req.app.locals.connect;
        const users = await getAllUsers(connection);
        res.status(200).json(user);
    }
    catch (err) {
        res.status(500).json(err);
    }

}

async function deleteUserController(req, res) {
    try {
        const userId = parseInt(req.params.id);
        const connection = req.app.locals.connect;
        const result = await deleteUser(userId, connection);
        res.status(200).json(result);
    }
    catch (err) {
        res.status(500).json(err);
    }
}
async function deleteAllUsersController(req, res) {
    try {
        const connection = req.app.locals.connect;
        const result = await deleteAllUsers(connection);
        res.status(200).json(result);
    }
    catch (err) {
        res.status(500).json(err);
    }
}
async function updateUserPartController(req, res) {
    try {
        const newUserInfo = req.body;
        const userId = parseInt(req.params.id);
        const connection = req.app.locals.connect;
        const result = await updateUserPATCH(newUserInfo, userId, connection)
        res.status(200).json(result);
    }
    catch (err) {
        res.status(500).json(err);
    }
}
async function updateUserController(req,res){
    try{
         let { f_name, l_name, age, sex } = req.body;
        const connection = req.app.locals.connect;
         const userId = parseInt(req.params.id);
        let result = await updateUserPUT(f_name, l_name, age, sex,userId, connection);
        res.status(201).json(result);
    }
    catch(err){
        res.status(500).json(err);
    }
}
module.exports = { getUserController, getAllUsersController, createUserController, deleteUserController, deleteAllUsersController, updateUserController,updateUserPartController };