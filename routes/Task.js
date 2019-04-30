const express = require('express');
const Task = require("../models/Task");
const router = express.Router();

router.get('/',async(req,res)=>{
try{
    const tasks = await Task.find({});
    res.send(tasks);
}
catch(err){
    throw new Error(err);
}
});

router.get("/:id",async(req,res)=>{
    try{
        const task = await Task.findById(req.params.id);
        if(task) res.json(task);
        else res.json({message:"Record Not Found od Error Deleting Record"});
    }catch(err){
        throw err;
    }
});
   

router.post("/",async(req,res)=>{
     const tasks = new Task({
         title:req.body.title,
     });
     if(tasks.save())res.json({message:"Task Added Successfully"});
     else res.json({message:"Error saving task"})
 });


router.put("/:id",async(req,res)=>{
    try{
        const task = await Task.findByIdAndUpdate(req.params.id,{
            title: req.body.title,
            isCompleted:req.body.isCompleted
        });
        if(task)res.json({message:"Task Updated Successfully"});
        else res.json({message:"Record Not Found or Error Updating Record"});
    }catch(err){
        res.json({message:err.message});
    }
});

router.delete("/:id",async(req,res)=>{
    try{
        const task = await Task.findByIdAndDelete(req.params.id);
        if(task) res.json({message:"Task Deleted Successfully"});
        else res.json({message:"Record Not Found od Error Deleting Record"});
    }catch(err){
        throw err;
    }
});
module.exports = router;