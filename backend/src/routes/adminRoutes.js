import express from 'express'
import { authorizeRoles, protect } from '../middleware/middleware.js'
import { addCourse, addStudent, getAllCourses, getAllStudent, getStudent, updateDetails } from '../controllers/adminControllers.js'

const router = express.Router()


router.get('/students', protect, authorizeRoles("admin"), getAllStudent)
router.post("/add-student", protect, authorizeRoles("admin"), addStudent)
router.put("/edit-students/:id", protect, authorizeRoles("admin"), updateDetails)
router.get("/student/:id", protect, authorizeRoles("admin"), getStudent)
router.post("/add-course", protect, authorizeRoles("admin"), addCourse)
router.get("/get-courses", protect, authorizeRoles("admin"), getAllCourses)


export default router