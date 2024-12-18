import express from 'express';
import {
    getProducts,
    getProductById,
    addProduct,
    updateProduct,
    deleteProduct
} from '../controllers/ProductController.js';

const router = express.Router();

router.get('/api/products', getProducts);
router.get('/api/products/:id', getProductById);
router.post('/api/products', addProduct);
router.put('/api/products/:id', updateProduct);
router.delete('/api/products/:id', deleteProduct);

export default router;