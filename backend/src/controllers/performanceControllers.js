import {getPerformance} from '../modules/performance/performanceService.js'

export const getDashboard = async (req, res) => {
    try {
        const studentId = req.params.studentId
        console.log(studentId)
        const performance = await getPerformance(studentId)
        console.log(performance)
        
        res.json({
            message: "performance is succesfully fetched",
            performance

           
        })
        
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}