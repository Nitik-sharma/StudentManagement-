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
    communicationRating: {
        type: Number,
        default:0
    },
    backlogs: {
        type: Number,
        default:0
    },
    phone: {
  type: String,
        trim: true,
  match: [/^[0-9]{10}$/, "Please enter valid phone number"],
    },
    rollNo: {
  type: String,
  trim: true,
},

course: {
  type: String,
  
},

},
    {
        timestamps:true
    }


)


const User = mongoose.model("User", userSchema);

export default User;



