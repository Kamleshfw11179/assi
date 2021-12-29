const express = require("express")
const Student = require("../models/student.model")
const router = express.Router()

router.get("",async(req,res)=>{
    let data = await Student.find({});
    res.status(200).send(data)
})
router.get("/:id",async(req,res)=>{
    let data = await Student.findById(req.params.id);
    res.status(302).send(data)
})

router.post("",async(req,res)=>{
    let data = await Student.create(req.body);
    res.status(201).send(data)
})

router.patch("/:id",async(req,res)=>{
    let data = await Student.findByIdAndUpdate(req.params.id,req.body);
    res.status(202).send(data)
})

router.delete("/:id",async(req,res)=>{
    let data = await Student.findByIdAndDelete(req.params.id);
    res.status(202).send(data)
})



module.exports = router