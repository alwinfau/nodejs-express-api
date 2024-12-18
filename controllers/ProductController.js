import Product from '../models/product.js';

export const getProducts = async (req, res) => {
    try {
        const products = await Product.findAll();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({
            message: 'Error fetching products',
            error
        });
    }
};

export const getProductById = async (req, res) => {
    const {
        id
    } = req.params;
    try {
        const product = await Product.findByPk(id);
        if (!product) {
            return res.status(404).json({
                message: 'Product not found'
            });
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({
            message: 'Error fetching product',
            error
        });
    }
};

export const addProduct = async (req, res) => {
    const {
        name,
        price,
        description
    } = req.body;
    try {
        const product = await Product.create({
            name,
            price,
            description
        });
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({
            message: 'Error adding product',
            error
        });
    }
};

export const updateProduct = async (req, res) => {
    const {
        id
    } = req.params;
    const {
        name,
        price,
        description
    } = req.body;
    try {
        const product = await Product.findByPk(id);
        if (!product) {
            return res.status(404).json({
                message: 'Product not found'
            });
        }
        product.name = name || product.name;
        product.price = price || product.price;
        product.description = description || product.description;
        await product.save();
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({
            message: 'Error updating product',
            error
        });
    }
};

export const deleteProduct = async (req, res) => {
    const {
        id
    } = req.params;
    try {
        const product = await Product.findByPk(id);
        if (!product) {
            return res.status(404).json({
                message: 'Product not found'
            });
        }
        await product.destroy();
        res.status(200).json({
            message: 'Product deleted'
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error deleting product',
            error
        });
    }
};