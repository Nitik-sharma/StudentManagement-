import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './src/config/db.js'
import authRoutes from './src/routes/authRoutes.js'
import projectRoutes from './src/modules/projectRoutes.js'
import fileRoutes from './src/routes/fileRoutes.js'
import attandanceRoute from './src/routes/attandanceRoute.js'
import assignmentRoutes from './src/routes/assignmentRoutes.js'

dotenv.config()




const app = express()

app.use(cors())

app.use(express.json());

// Connect mongoDb
connectDB()

app.use("/api/auth", authRoutes)
app.use("/api/projects", projectRoutes)
app.use("/api/file", fileRoutes)
app.use("/api/attandance", attandanceRoute)
app.use("/api/addAssignment",assignmentRoutes)
app.get("/", (req, res) => {
    res.send("Project is running ")
})



const PORT = process.env.PORT ||3001

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
    console.log(PORT)
})