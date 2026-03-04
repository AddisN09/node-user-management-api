require('dotenv').config({path:'../.env'});
const {hashPassword}=require('./hashPassword.js');
const crypto=require('crypto');
const { hashPassword } = require('./hashPassword');

const key=Buffer.from(process.env.Encription_key,'hex');

async function encryptData(data){
    const iv=crypto.randomBytes(16);
    const cipher=crypto.createCipheriv('aes-256-cbc',key,iv);
    let encrypted=cipher.update(data,'utf8','hex');
    encrypted+=cipher.final('hex');
    return {
        encrypt:encrypted,
        initializationVector:iv.toString('hex')
    }
}

async function decryptData(data,iv){
    const cipher=crypto.createDecipheriv('aes-256-cbc',key,Buffer.from(iv,'hex'));
    let decrypted=cipher.update(data,'hex','utf8');
    decrypted+=cipher.final('utf8');
    return decrypted;
}
async function encryptUser(requestBody){
     const user=await requestBody();
     return {
        name:encryptData(user.name),
        id:encryptData(user.id),
        password:hashPassword(user.password)
     }
}

module.exports={ encryptData, decryptData };