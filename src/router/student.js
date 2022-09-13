const express = require("express");
const router = new express.Router();

router.get("/hello", (req,res)=>{
    res.send("Hello from my side");
})

module.exports = router;
