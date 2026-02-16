import express from 'express'
import { authorizeRoles, protect } from "../middleware/middleware.js"
import { addAssignment } from '../controllers/assignmentControllers.js'


const router = express.Router()


router.post("/", protect, authorizeRoles("teacher", 'admin'), addAssignment)

export default router