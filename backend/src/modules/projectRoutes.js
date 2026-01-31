import express from 'express'
import { authorizeRoles, protect } from '../middleware/middleware.js'
import { createProject, updateProjectStatus } from './projectController.js'



const router = express.Router()


// student submit project api

router.post("/", protect, authorizeRoles("student"), createProject);

router.put("/:id/status",
    protect,
    authorizeRoles("admin"),
    updateProjectStatus
)

export default router;