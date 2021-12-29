const express = require("express")
const connect = require("./config/db")
const studentController = require("./controllers/student.controller");
const adminController = require("./controllers/admin.controller");
const app = express();
app.use(express.json())

app.use("/student",studentController)
app.use("/admin",adminController)


app.listen(3001,(req,res)=>{
    connect()
    console.log("Server started on port 3001")
})