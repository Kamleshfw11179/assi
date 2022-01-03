const express = require("express")
const User = require("../models/user.model")
const router = express.Router()

router.get("",async(req,res)=>{
    let data = await User.find({})
    res.send(data)
})
router.get("/:id",async(req,res)=>{
    try{
    let data = await User.findById(req.params.id)
    res.send(data)
    }
    catch(err){
        console.log(err)
    }
   
})
router.patch("/:id",async(req,res)=>{
    let data = await User.findByIdAndUpdate(req.params.id,req.body,{new:true})
    res.send(data)
})
router.post("",async(req,res)=>{
    let data = await User.create(req.body)
    res.send(data)
})
router.delete("/:id",async(req,res)=>{
    let data = await User.findByIdAndDelete(req.params.id);
    res.send(data)
})

module.exports = router