import express from 'express'
import {protect} from '../middleware/middleware.js'
import upload from '../middleware/uploadMiddleware.js'
import { downloadFile, fileUpload } from '../modules/fileController.js'



const router = express.Router()

router.post("/upload", protect, upload.single("file"), fileUpload)
router.get("/:id/download",protect,downloadFile)

export default router