const express = require("express");
const app = express();
require('./db/conn.js');
const Students = require("./modals/students");

const studentRouter = require("./router/student");
const validator = require("validator");
const port = process.env.PORT || 3000;
app.use(express.json());


app.use(studentRouter);

// app.post("/students", (req, res)=>{
//     console.log(req.body);
//     const user = new Students(req.body);
//     user.save().then(()=>{
//         res.status(200).send(user);
//     }).catch((e)=>{
//         res.status(400).send(e);
//     })
// })

app.post("/students", async(req,res)=>{
    try{
        const user= new Students(req.body);
        const createuser = await user.save();
        res.status(201).send(createuser);
    }catch(e){
        res.status(400).send(e);

    }
})

app.get("/students", async(req, res)=>{
    try{
     const studentsData = await Students.find();
        res.send(studentsData);
    }
    catch(err){
        console.log(err);
    }
    })

app.get("/students/:id", async(req, res)=>{
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
app.patch("/student/:id", async(req,res)=>{
    try{
            const _id = req.params.id;
        const Studentupdate = await Students.findByIdAndUpdate(_id, req.body);
        res.status(201).send(Studentupdate);
        console.log(req.body);

    }catch(err){
        console.log(err);
    }
})

app.delete("/student/:id", async(req,res)=>{
    try{
       const Deleteduser = await Students.findByIdAndDelete(req.params.id);
       if(!req.params.id) return res.status(400).send();
       res.send(deleteStudent);

    }catch(e){
        res.status(500).send(e);
    }
})


app.listen(port, ()=>{
    console.log("connection is set up in port number ", port); 
})
