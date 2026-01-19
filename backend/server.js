import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './src/config/db.js'
dotenv.config()




const app = express()

app.use(cors())

app.use(express.json());

// Connect mongoDb
connectDB()


app.get("/", (req, res) => {
    res.send("Project is running ")
})



const PORT = process.env.PORT ||3001

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
    console.log(PORT)
})