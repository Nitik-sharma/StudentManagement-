import Project from "../models/Project.js";

// Student Submit Project

export const createProject = async (req, res) => {
    try {
        const { title, description } = req.body
        
        const project = await Project.create({
            title,
            description,
            student: req.user._id
        });

        res.status(201).json({
            message: "Project submitted sucessfully",
            project
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Admin Approve or Reject Project

export const updateProjectStatus = async (req, res) => {
    try {
        const { status } = req.body
        const project = await Project.findById(req.params.id);
        if (!project) {
            return res.status(400).json({message:"Project not found "})
        }

        project.status = status;
        await project.save()

        res.json({
            message: `Project ${status} successfully`,
            project
        })
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}



// to get the project

export const getProject = async(req,res) => {
    try {

        let projects;

        if (req.user.role === 'admin') {
            projects = await Project.find()
                .populate("student", "name email").populate("teacher", "name email")  
        } else if (req.user.role === 'student') {
            projects=await Project.find({student:req.user._id}).populate("student","name email")
        } else if (req.user.role === 'teacher') {
            projects=await Project.find({teacher:req.user._id}).populate("teacher","name email")
        }

        res.json(projects)
        
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

// Assign teacher to project

export const getAssignTeacher = async (req, res) => {
    
    try {
        const { teacherId } = req.body
        
        const project = await Project.findById(req.params.id);

        if (!project) {
           return res.status(404).json({message:"Project not found "})
        }

        if (project.status !== 'approved') {
        return res.status(400).json({messgae:"Only approved project is assigned"})
        }

        project.teacher = teacherId
        
        await project.save()

        res.json({
            message: "Teacher assigned sucessfully ",
            project
        })
    } catch (error) {
        res.status(500).json({message:error.message})
    }
    
}
