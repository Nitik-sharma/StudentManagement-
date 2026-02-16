import mongoose from 'mongoose'

 const MockSchema = new mongoose.Schema({
    student: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref:"User"
    },
    testName: {
        type: String,
        required:true
    },
    score: {
        type: Number,
        required:true
    },
    maxScore: {
        type: Number,
        required:true
    },
    percentage: {
        type: Number,
        required:true
    },
    evaluatedBy: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref:"User"
    }

}, { timestamps: true })


export default mongoose.model("mockTest",MockSchema)