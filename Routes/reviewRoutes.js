import express from 'express';
import { createReview, updateReview} from '../controllers/reviewController.js';
const router = express.Router();

// Route to get all reviews

router.post("/CreateReview", createReview);

router.post("/updateReview",updateReview);

export default router;
