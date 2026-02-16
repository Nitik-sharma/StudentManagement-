import Attendance from "../models/Attendance.js";

// mark attandance

export const markAttandance = async (req, res) => {
    try {
        const { studentId, course, totalClass, attendedClasses } = req.body
        const percentage = (attendedClasses / totalClass) * 100
        
        const attandanceMark = await Attendance.create({
            studentId: studentId,
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