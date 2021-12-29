const express = require("express")
const Admin = require("../models/admin.model")
const router = express.Router();


router.get("",async(req,res)=>{
    let data = await Admin.find({});
    res.status(200).send(data)
})


router.post("",async(req,res)=>{
    let data = await Admin.create(req.body);
    res.status(201).send(data)
})


router.get("/:id",async(req,res)=>{
    let data = await Admin.findById(req.params.id);
    res.status(302).send(data)
})


router.patch("/:id",async(req,res)=>{
    let data = await Admin.findByIDAndUpdate(req.params.id,req.body);
    res.status(202).send(data)
})


router.delete("/:id",async(req,res)=>{
    let data = await Admin.findBIdAndDelete(req.params.id);
    res.status(202).send(data)
})



module.exports = router