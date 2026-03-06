import User from "../models/User.js";
import Course from "../models/courseModels.js";


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
        console.log("PARAM ID:", req.params.id);
        console.log("FOUND STUDENT:", student);
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


export const getStudent = async (req, res) => {
    try {
        const student = await User.findById(req.params.id).populate("course", "name code")
        
        if (!student) {
            return res.status(404).json({ message: "Student not found " })
            
        }

        res.json({
            success: true,
            student
        })
        
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}


// ADD Course

export const addCourse = async (req, res) => {
    try {
        const { name, code, instructor, duration, fees } = req.body
        const courseExist = await Course.findOne({ code })
        
        if (courseExist) {
            return res.status(400).json({message:"Course with this code already exist"})
        }

        const course = await Course.create({
            name,
            code,
            instructor,
            duration,
            fees
        })

        res.status(201).json({
            message: "Course is added sucessfully ",
            course
        })
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

// get all courses

export const getAllCourses = async (req, res) => {
    try {
        const courses = await Course.find().sort({ createdAt: -1 })
        
        res.json({
            success: true,
            count: courses.length,
            courses,
        });
    } catch (error) {
         res.status(500).json({ message: error.message });
    }
}
