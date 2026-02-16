import mongoose from "mongoose";

const AttendanceSchema = new mongoose.Schema({
    studentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required:true
    },
    course: {
        type: String,
        required:true
    },
    totalClass: {
        type: Number,
        required: true,
        default:0
        
    },
    attendedClasses: {
        type: Number,
        required: true,
        default:0
    },
    attendancePercentage:{
        type: Number,
        default:0
    },
    markedBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
}, { timestamps: true })



export default mongoose.model("Attandance", AttendanceSchema)
