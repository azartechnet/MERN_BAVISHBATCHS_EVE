const exp=require('express')
const app=exp()

//Single Routing

const r1=exp.Router()

r1.get("/",function(req,res){
    res.send("Hello from route 1")
})
app.use("/r1",r1)

app.listen(3001,function(err){
    if(err) console.log(err)
    console.log("Server is Running...")
})