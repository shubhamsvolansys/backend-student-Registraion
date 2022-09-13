const express = require("express");
const router = new express.Router();
const Students = require("../modals/students");

router.post("/students", async(req,res)=>{
    try{
        const user= new Students(req.body);
        const createuser = await user.save();
        res.status(201).send(createuser);
    }catch(e){
        res.status(400).send(e);

    }
})

router.get("/students", async(req, res)=>{
    try{
     const studentsData = await Students.find();
        res.send(studentsData);
    }
    catch(err){
        console.log(err);
    }
    })

router.get("/students/:id", async(req, res)=>{
    try{
            const id = req.params.id;
         const studentsData = await Students.findById(id);
         if(!studentsData) return res.status(404).send();
            res.send(studentsData);
        }
    catch(err){
            console.log(err);
        }
        })

/**
 * Update students details
 */
router.patch("/student/:id", async(req,res)=>{
    try{
            const _id = req.params.id;
        const Studentupdate = await Students.findByIdAndUpdate(_id, req.body);
        res.status(201).send(Studentupdate);
        console.log(req.body);

    }catch(err){
        console.log(err);
    }
})

router.delete("/student/:id", async(req,res)=>{
    try{
       const Deleteduser = await Students.findByIdAndDelete(req.params.id);
       if(!req.params.id) return res.status(400).send();
       res.send(deleteStudent);

    }catch(e){
        res.status(500).send(e);
    }
})
module.exports = router;
