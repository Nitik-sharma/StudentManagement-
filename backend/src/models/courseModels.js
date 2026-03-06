import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim:true
    },
    code: {
        type: String,
        required: true,
        unique: true,
        trim:true,
    },
    instructor: {
        type: String,
        trim:true,
    },
    duration: {
        type:String,
    },
    fees: {
        type:Number
    },
}, { timestamps: true })

const Course = mongoose.model("Course", courseSchema)

export default Course