import { Router } from "express";
import { getProducts, createProduct } from "../controllers/product.controller.js";
const router = Router();

router.get("/", getProducts);

export default router;
