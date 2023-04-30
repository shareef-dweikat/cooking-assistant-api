const Product = require('../models/Product')
const asyncHandler = require('../middlewares/async');

// @desc get all products
// @route GET /api/v1/products/
// @access Public 
exports.getProducts = asyncHandler(async (req, res, next) => {
    let query = Product.find()
    const products = await query
    res.status(200).json(products)
})

// @desc create a product
// @route POST /api/v1/products/
// @access Public 
exports.createProduct = asyncHandler(async (req, res, next) => {
    const product = await Product.create(req.body)
    res.status(200).json(product)
})