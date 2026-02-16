import express from 'express'
import { authorizeRoles, protect } from "../middleware/middleware.js"
import { addMockTest } from '../controllers/mockControllers.js'

const router = express.Router()


router.post("/", protect, authorizeRoles("teacher", "admin"), addMockTest)
export default router
