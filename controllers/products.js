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

// @desc get a product
// @route GET /api/v1/products/:id
// @access Public 
exports.getProduct = asyncHandler(async (req, res, next) => {
    const product = await Product.find({_id: req.params.id})
    res.status(200).json(product)
})

// @desc update a product
// @route PUT /api/v1/products/:id
// @access Public 
exports.updateProduct = asyncHandler(async (req, res, next) => {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    })
    res.status(200).json(product)
})

// @desc delete a product
// @route DELETE /api/v1/products/:id
// @access Public 
exports.deleteProduct = asyncHandler(async (req, res, next) => {
    const product = await Product.findByIdAndDelete(req.params.id)
    res.status(200).json(product)
})