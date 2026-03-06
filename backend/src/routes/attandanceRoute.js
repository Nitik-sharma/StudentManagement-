import express from "express"
import { authorizeRoles, protect } from "../middleware/middleware.js"

import { getAttendanceByDate, markAttendance } from "../controllers/attendanceController.js"



const router = express.Router()


router.post("/mark", protect, authorizeRoles("teacher", "admin"), markAttendance)
router.get("/date",protect,authorizeRoles("teeacher","admin"),getAttendanceByDate)


export default router