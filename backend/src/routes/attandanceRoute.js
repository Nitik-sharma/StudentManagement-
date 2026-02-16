import express from "express"
import { authorizeRoles, protect } from "../middleware/middleware.js"
import { markAttandance } from "../controllers/attandanceController.js"


const router = express.Router()
router.post("/", protect, authorizeRoles("teacher", "admin"), markAttandance)

export default router