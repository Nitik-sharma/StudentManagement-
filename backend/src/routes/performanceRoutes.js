import express from 'express'
import { protect } from '../middleware/middleware.js'

import { getDashboard } from '../controllers/performanceControllers.js'


const router = express.Router()

router.get("/:studentId", protect, getDashboard)

export default router

