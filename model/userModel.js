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

module.exports={ readFileContent, writeFileContent };
 