import express from "express"
import { authorizeRoles, protect } from "../middleware/middleware.js"
import { getAttadance, markAttandance } from "../controllers/attandanceController.js"


const router = express.Router()
router.post("/", protect, authorizeRoles("teacher", "admin"), markAttandance)
router.get("/getAttandance",protect,getAttadance)

export default router