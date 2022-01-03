const mongoose = require("mongoose")
const connect = () =>{
    console.log("connected to local database")
    return(mongoose.connect("mongodb://localhost:27017/demo")
    )
}

module.exports = connect