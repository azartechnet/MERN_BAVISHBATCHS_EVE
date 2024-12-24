const express=require('express')
const app=express()
app.use(express.text())
app.post("/",function(req,res){
    res.send(req.body)
}).listen(3001)
console.log("Server is Running...")