import Attendance from "../models/Attendance.js";

// mark attandance

export const markAttandance = async (req, res) => {
    try {
        const { studentId, course, totalClass, attendedClasses } = req.body

        if (!studentId || !course || !totalClass || !attendedClasses) {
            return res.status(400).json({
                message: "All fields are required"
            })
        }
        const percentage = (attendedClasses / totalClass) * 100
        
        const attandanceMark = await Attendance.create({
           student:studentId,
            course,
            totalClass,
            attendedClasses,
            attendancePercentage: percentage,
            markedBy:req.user._id
        })

        res.status(201).json({
            message: "Mark attandance sucessfully",
            attandanceMark
        })
        
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}


export const getAttadance = async (req, res) => {
    try {
        const attandance = await Attendance.find({ student: req.user._id }).sort({ createdAt: -1 })
        
        res.json({
            success: true,
            count: attandance.length,
            attandance
        })
        
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}