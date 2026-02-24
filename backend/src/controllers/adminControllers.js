import User from "../models/User.js";



export const getAllStudent = async (req, res) => {
    
try {
    const students = await User.find({ role: "student" }).select("-password");
    res.status(200).json({
        success: true,
        count: students.length,
        students,
        
    })
} catch (error) {
    res.status(500).json({
        success: false,
        message:error.message
    })
}

}


export const addStudent = async (req, res) => {
    try {
        const { name, email, password, phone, course } = req.body;

        const Student = await User.create({
            name, email, password, phone, course, role: "student"
        })

        res.status(201).json({
            success: true,
            Student
        })
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}
export const updateDetails = async (req, res) => {
    try {
        const { rollNo, course, phone } = req.body;
        const student = await User.findById(req.params.id)
        if (!student) {
            res.status(404).json({message:"Student not found "})
        }
        student.rollNo = rollNo || student.rollNo,
            student.phone = phone || student.phone,
            student.course = course || student.course
        
        await student.save()

        res.json({
            success: true,
            student
        })
        

    } catch (error) {
        res.status(500).json({message:error.message})
    }
}