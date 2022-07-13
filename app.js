const bodyParser = require('body-parser')
const express = require('express')
const { MongoClient } = require('mongodb')
const path =require('path')
const mongoclient =require('mongodb').mongoclient
const app = express()


app.post('/', bodyParser.urlencoded({extended: true}),(req,res,next) => {
MongoClient.connect('mongodb://localhost:27017',(err,client) => {
    console.log('connect to data base')
   let db = client.db('test')
   db.collection('users').insertOne({
    name: req.body.name
   })
client.close()
})
})



app.use(express.static(path.join(__dirname,'statics')))

app.get('/',(req,res,next) =>{
    res.render('index.ejs')
})
// app.use((req,res) => {
//     res.write('<h1>hello world\n</h1>')
//     res.write('<h1>hello world2\n</h1>')
//     res.write('<h1>hello world3\n</h1>')
//     res.write('<h1>hello world4\n</h1>')
//     res.end()
// })

app.use((req,res,) => {
    console.log('hello 2')
  
})





app.listen(3000,()=> console.log('server is lisent on port 3000'))