import express from 'express'
import { google,signup,signout,signin } from '../controllers/authController.js'

const router = express.Router()

router.post("/signup",signup)
router.post("/signin",signin)
router.post("/google",google)
router.get("/signout", signout)
export default router;