import express from 'express'
import { authorizeRoles, protect } from '../middleware/middleware.js'
import { createProject, updateProjectStatus,getProject, getAssignTeacher } from './projectController.js'



const router = express.Router()


// student submit project api

router.post("/", protect, authorizeRoles("student"), createProject);

router.put("/:id/status",
    protect,
    authorizeRoles("admin"),
    updateProjectStatus
)
router.put("/:id/assign-teacher",protect,authorizeRoles("admin"),getAssignTeacher)
router.get("/", protect, getProject)


export default router;