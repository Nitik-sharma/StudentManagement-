import mongoose from "mongoose";

const AttendanceSchema = new mongoose.Schema({
    student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required:true
    },
     course: {
    type: String,
    
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
    date: {
    type: Date,
    required: true
  },
    status: {
    type: String,
    enum: ["Present", "Absent"],
    required: true
  },
    markedBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
}, { timestamps: true })



export default mongoose.model("Attandance", AttendanceSchema)
