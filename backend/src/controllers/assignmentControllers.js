import Assignment from "../models/Assignment.js";


export const addAssignment = async (req, res) => {
    try {
        const { studentId, course, title, marksObtain, maxMarks } = req.body
        
        const percentage = (Number(marksObtain) / Number(maxMarks)) * 100
        
        const assignment = await Assignment.create({
            student: studentId,
            course,
            title,
            marksObtain,
            maxMarks,
            percentage: percentage,
            evaluatedBy:req.user._id

        })

        res.status(201).json({message:"Assignment marks obtain sucessfully",assignment})
        
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}