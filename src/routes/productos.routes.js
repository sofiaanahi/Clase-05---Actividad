import { Router } from "express";
import { getProducts, createProduct } from "../controllers/productos.controllers.js";

const router = Router();

router.get('/products', getProducts)
router.post('/product', createProduct)



export default router;