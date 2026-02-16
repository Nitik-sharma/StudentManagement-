import mongoose from 'mongoose'

const AssignmentSchema = new mongoose.Schema({
    student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required:true
    },
    course: {
        type: String,
        required:true
    },
    title: {
        type: String,
        required:true
    },
    marksObtain: {
        type: Number,
        required:true
    },
    maxMarks: {
        type: Number,
        required: true,
        
    },
    percentage: {
        type:Number,
    },
    evaluatedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
}, { timestamps: true })

export default mongoose.model("Assignment",AssignmentSchema)