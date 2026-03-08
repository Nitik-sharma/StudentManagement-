import express from 'express'
import { authorizeRoles, protect } from '../middleware/middleware.js'
import { addAssignment, getAssignments } from '../controllers/assignmentControllers.js'

const router = express.Router()

router.post("/add", protect, authorizeRoles("teacher", "admin"), addAssignment)
router.get("/all", protect, authorizeRoles("teacher", "admin"), getAssignments)

export default router