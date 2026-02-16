import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim:true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase:true
    },
    password: {
        type: String,
        required:true,
    },
    role: {
        type: String,
        enum:["student","teacher",'admin'],
        default:"student"
    },
    isActive: {
        type: Boolean,
        default: true
    },
    cgpa: {
        type: Number,
        default:0
    },
    aptitudeScore: {
        type: Number,
        default:0
    },
    communicationrating: {
        type: Number,
        default:0
    },
    backlogs: {
        type: Number,
        default:0
    }

},
    {
        timestamps:true
    }


)


const User = mongoose.model("User", userSchema);

export default User;



