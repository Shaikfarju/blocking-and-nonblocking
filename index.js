const fs = require('fs')
const inputTxt = fs.readFileSync('./info.txt', 'utf-8')
// console.log(inputTxt)


const outputTxt = `Hello world: ${inputTxt}.\nCreat on ${Date.now()}`
fs.writeFileSync('./output.txt',outputTxt)


fs.readFile('./info.txt','utf-8',(err, data)=>{
    fs.writeFile('./newFile.txt', `${data}`, 'utf-8', (err,data1)=>{
        console.log('File was created')
    })
})


