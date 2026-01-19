import mongoose from "mongoose";


const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URL)
        console.log(`MongoDB is connect sucessfully at the point ${conn.connection.host}`)
    } catch (error) {
        console.log(error)
    }
}

export default connectDB;