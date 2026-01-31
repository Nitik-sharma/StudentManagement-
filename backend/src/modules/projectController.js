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
        const project = await Project.findById(reeq.params.id);
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
