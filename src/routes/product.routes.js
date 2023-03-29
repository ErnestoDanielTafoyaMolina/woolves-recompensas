import { Router } from 'express';
const router = Router();

import { authJwt } from '../middlewares';

import { addProduct,
         deleteProductById,
         editProductById,
         getAllProducts,
         getAvailableProducts,
         getProductById,
         getUnavailableProducts } from '../controllers/products.controller';

//ver los productos
router.get("/products",getAllProducts);
router.get("/products/available",getAvailableProducts);
router.get("/products/unavailable",getUnavailableProducts);
//productos por id
router.get("/product/:id",getProductById);


//acciones
router.post("/product",[authJwt.verifyToken,authJwt.isAdmin],addProduct);
router.put("/product/:id",[authJwt.verifyToken,authJwt.isAdmin],editProductById);
router.delete("/product/:id",[authJwt.verifyToken,authJwt.isAdmin],deleteProductById);
export default router;