const { promisify }=require('util');
const fs=require('fs');
const path=require('path');

const filePath=path.join(__dirname,'../data/data.json');
const readFile=promisify(fs.readFile);
const writeFile=promisify(fs.writeFile);

async function readFileContent(){
    const content=await readFile(filePath,'utf8');
    return JSON.parse(content);
}
async function writeFileContent(content){
    await writeFile(filePath,JSON.stringify(content,null,2));
}

async function findUserById(id){
    const users=await readFileContent();
    return users.find(element=>element.id===id);
}

async function addUser(user){
    const users=await readFileContent();
    users.push(user);
    return users;
}

module.exports={ readFileContent, writeFileContent, findUserById, addUser };
 