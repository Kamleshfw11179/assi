const express = require("express")
const app = express()
const userRouter = require("./controllers/user.controller")
const connect = require("./config/db")
app.use(express.json())


app.use("/user",userRouter)

app.listen(3000,(req,res)=>{
    connect()
    console.log("server started on port 3000")
})