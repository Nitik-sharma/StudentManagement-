import MockTest from "../models/MockTest.js"
import User from "../models/User.js"

export const addMarks = async (req, res) => {
    
try {
    const { studentId, testName, score, maxScore } = req.body
    
    const student = await User.findById(studentId)
    
    if (!student) {
        return res.status(404).json({
            message:"Student not found"
        })
    }

    const percentage = (score / maxScore) * 100
    
    const marks = new MockTest({
        student: studentId,
        testName,
        score,
        maxScore,
        percentage,
        evaluatedBy:req.user._id
    })

    await marks.save()

    res.status(201).json({
        success: true,
        message: "Marks added successfully",
        marks
    })



} catch (error) {
     res.status(500).json({ message: error.message });
}


}