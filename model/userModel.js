async function createUser(f_name,l_name,age,sex,connection){
    const [result]=await connection.query('INSERT INTO users(f_name,l_name,age,sex) VALUES(?,?,?,?)',[f_name,l_name,age,sex]);
    return result;
}
async function getUser(userId,connection){
    const [user]=await connection.query('SELECT * FROM users WHERE id=?',[userId]);
    return user;
}
async function getAllUsers(connection){
    const [users]=await connection.query('SELECT * FROM users');
    return users;
}
async function deleteUser(userId,connection){
    const [result]=await connection.query('DELETE FROM users WHERE id=?',[userId]);
    return result;
}
async function deleteAllUsers(connection){
    const [result]=await connection.query('DELETE FROM users');
    return result;
}
async function updateUserPUT(newUserInfo,userId,conecction){
    const {f_name,l_name,age,sex}=newUserInfo;
    const [result]=await connection.query(`UPDATE users SET f_name=?,l_name=?,age=?,sex=? WHERE id=?`,[f_name,l_name,age,sex,userId]);
    return result;
}
async function updateUserPATCH(newUserInfo,userId,connection){
    const fildes=[];
    const values=[];
    for(let [key,value] of Object.entries(newUserInfo)){
           fildes.push(`${[key]}=?`);
           values.push(value);
    }
    values.push(userId);
    const [result]=await connection.query(`UPDATE users SET ${fildes.join(",")} WHERE id=?`,values);
    return result;
}
module.exports={createUser,deleteAllUsers,deleteUser,getAllUsers,getUser,updateUserPATCH,updateUserPUT}