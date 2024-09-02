import express from 'express';
import { getProductByCategory, getProductById, updateForProduct } from '../controllers/productController.js';
const router = express.Router();

// Route to get all products

router.get("/byCategory", getProductByCategory);

router.get("/byId", getProductById);

router.post("/update_review",updateForProduct);

export default router;
