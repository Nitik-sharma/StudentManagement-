import File from "../models/File.js"
import Project from "../models/Project.js"
import path from 'path'



export const fileUpload = async (req, res) => {
    try {
        const { projectId } = req.body;
        const project = await Project.findById(projectId);
        
        if (!project) {
            return res.status(404).json({message:"Project is not found"})
        }

        const file = await File.create({
            filename: req.file.filename,
            originalname: req.file.originalname,
            mimetype: req.file.mimetype,
            size: req.file.size,
            project:projectId,
            uploadedBy:req.user._id
        })

        res.status(201).json({
            message: "Project upload sucessfully ",
            file
        })
         console.log("BODY:", req.body);
console.log("FILE:", req.file);

    } catch (error) {
        res.status(500).json({message:error.message})
    }
}



export const downloadFile =async (req,res) => {
    try {
        const file = await File.findById((req.params.id).populate("project"));

        if (!file) {
            return res.status(404).json({message:"File not found"})
        }

        const project = file.project
        
        // Authorization check
        const isStudent = project.student.toString() === req.user._id.toString()
        
        const isTeacher = project.teacher && project.teacher.toString() === req.user._id.toString()
        
        const isAdmin = req.user.role === 'admin';
     
        if (!isStudent && !isTeacher && !isAdmin) {
            return res.status(403).json({ message: "Not authorized to download the assignment" })
            
        }

        const filePath = path.join(process.cwd(), "uploads", file.filename)
        
        res.download(filePath)



     

    } catch (error) {

        res.status(500).json({ message: error.message });
        
    }
}