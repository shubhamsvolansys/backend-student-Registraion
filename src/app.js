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




app.listen(port, ()=>{
    console.log("connection is set up in port number ", port); 
})
 