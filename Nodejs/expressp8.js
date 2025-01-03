const exp=require('express')
const app = exp()
const port = 3001

//Multiple Routing

const r1=exp.Router()

const r2=exp.Router()

const r3=exp.Router()

r1.get("/",function(req,res){
    res.send("Hello from route 1")
})
r2.get("/",function(req,res){
    res.send("Hello from route 2")
    })
r3.get("/",function(req,res){
    res.send("Hello from route 3")
})
app.use("/r1",r1)
app.use("/r2",r2)
app.use("/r3",r3)

app.listen(port,function(err){
    if(err) console.log(err)
        console.log("Server is Running...")
})