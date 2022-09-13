const mongoose = require("mongoose");
const validator = require("validator");

const studentSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        minlength:3
    },
    email:{
        type: String,
        required : true,
        unique:[true, "Email Id is already present"],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid Email");
            }

        }
    }
    ,
        phone:{
            type : String,
            required: true,
            min:10,
            unique:true
        },
        address:{
            type : String,
            required:true
        }

})

// creating new collections using modals

const Student = new mongoose.model('Student',studentSchema)
module.exports = Student;