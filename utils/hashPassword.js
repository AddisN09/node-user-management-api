const { promisify }=require('util');
const crypto=require('crypto');

const scrypt=promisify(crypto.scrypt);

async function hashPassword(password,salt=null){
    salt=salt?Buffer.from(salt,'hex'):crypto.randomBytes(16);
    const hashed=await scrypt(password,salt,32);
    return {
        hash:hashed.toString('hex'),
        salt:salt.toString('hex')
    }
}
 
module.exports={ hashPassword };