import express from 'express'
import { authorizeRoles, protect } from "../middleware/middleware.js"
import { addMockTest, getMockTest } from '../controllers/mockControllers.js'

const router = express.Router()


router.post("/add", protect, authorizeRoles("teacher", "admin"), addMockTest)
router.get("/",protect,getMockTest)
export default router
