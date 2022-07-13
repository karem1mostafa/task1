const request =require('http').request

request('http://localhost:808',(res) => {
    res.on('date', () =>{ })
    res.on('end', () =>{ 
console.log(Date.now() - start)})
}).end()