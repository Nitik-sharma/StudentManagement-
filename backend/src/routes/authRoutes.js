import express from 'express'
import { loginUser, registerUser } from '../controllers/authController.js'
import { authorizeRoles, protect } from '../middleware/middleware.js';


const router = express.Router()


router.post("/register", registerUser);
router.post("/login", loginUser)
router.get("/profile",protect , (req, res) => {
  res.json(req.user);
});

router.get("/admin-only",protect ,authorizeRoles("admin"), (req, res) => {
    res.json({message:"Welcome Admin"})
})


export default router;