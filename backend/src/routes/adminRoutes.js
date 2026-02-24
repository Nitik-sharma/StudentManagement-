import express from 'express'
import { authorizeRoles, protect } from '../middleware/middleware.js'
import { addStudent, getAllStudent, updateDetails } from '../controllers/adminControllers.js'

const router = express.Router()


router.get('/students', protect, authorizeRoles("admin"), getAllStudent)
router.post("/add-student", protect, authorizeRoles("admin"), addStudent)
router.put("/students/:id",protect,authorizeRoles("admin"),updateDetails)

export default router