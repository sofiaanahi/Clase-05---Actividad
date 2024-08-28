import { Router } from "express";
import { getProducts, createProduct, updateProduct, deleteProduct } from "../controllers/productos.controllers.js";
import ProductService from '../services/productService.js'

const router = Router();

router.get('/', getProducts);


export default router;