import express from 'express';
import {registerController,loginController,testController} from '../controllers/authController.js';
import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js';

const router = express.Router();

// Route to get all users
// routing
// REGISTER || METHOD:POST
router.post("/register", registerController);

// LOGIN || POST(New Route)
router.post("/login", loginController);

// Test Routes
router.get("/test", requireSignIn, isAdmin, testController);

// Route to create a new user

export default router;
