import { Router } from "express";
import { addProduct, deleteProductById, editProductById, getProductById, getAllProducts, getAvailableProducts, getUnavailableProducts } from "../controllers/product.controllers";
const router = Router();
//ver los productos
router.get("/products",getAllProducts);
router.get("/products/available",getAvailableProducts);
router.get("/products/unavailable",getUnavailableProducts);
//productos por id
router.get("/product/:id",getProductById);
//acciones
router.post("/product",addProduct);
router.put("/product/:id",editProductById);
router.delete("/product/:id",deleteProductById);

export default router;