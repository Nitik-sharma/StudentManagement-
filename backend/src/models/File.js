import mongoose from "mongoose";


const fileUploadSchema = new mongoose.Schema({
    filename: String,
    originalname: String,
    mimetype: String,
    size: Number,
    
    project: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Project",
        required:true
    },
    uploadedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required:true
    }
    
    
},

{timestamps:true}
)

export default mongoose.model("File", fileUploadSchema);