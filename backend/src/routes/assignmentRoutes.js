import express from 'express'
import { authorizeRoles, protect } from "../middleware/middleware.js"
import { addAssignment, getMyAssignments } from '../controllers/assignmentControllers.js'


const router = express.Router()


router.post("/", protect, authorizeRoles("teacher", 'admin'), addAssignment)
router.get("/my-assignments",protect,getMyAssignments)

export default router