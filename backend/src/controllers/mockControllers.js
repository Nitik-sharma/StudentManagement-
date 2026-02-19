import MockTest from "../models/MockTest.js"
import mockTest from "../models/MockTest.js"


export const  addMockTest = async (req, res) => {
    try {
        const { studentId, testName, score, maxScore } = req.body
        
        const percentage = (Number(score) / Number(maxScore)) / 100

        const addMock = await mockTest.create({
            student: studentId,
            testName,
            score,
            maxScore,
            percentage: percentage,
            evaluatedBy:req.user._id
        })

        res.json({message:"Mock number updated sucessfully",addMock})
        
    } catch (error) {
res.status(500).json({message:error.message})
        
    }
}

export const getMockTest = async (req,res) => {
    try {
        const mockTest = await MockTest.find({ student: req.user._id }).sort({ createdAt: -1 })
        
        res.json({
            success: true,
            count: mockTest.lenght,
            mockTest
        })
        

    } catch (error) {
        
    }
}