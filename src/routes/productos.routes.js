import { Router } from "express";
import { getProducts, createProduct } from "../controllers/productos.controllers.js";
import ProductService from '../services/productService.js'

const router = Router();

router.get('/products', async(req, res) => {
    try {
        const products = await ProductService.findAll()
        res.json(products);

    }catch(error){
        res.status(500).json({ message: error.message})

    }
})


router.post('/product', createProduct)



export default router;