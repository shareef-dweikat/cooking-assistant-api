const Application = require('../models/Application')
const asyncHandler = require('../middlewares/async');

// @desc get all applications
// @route GET /api/v1/applications/
// @access Public 
exports.getApplications = asyncHandler(async (req, res, next) => {
    let query = Application.find()
    const applications = await query
    res.status(200).json(applications)
})

// @desc create a application
// @route POST /api/v1/applications/
// @access Public 
exports.createApplication = asyncHandler(async (req, res, next) => {
    const application = await Application.create(req.body)
    res.status(200).json(application)
})

// @desc get a application
// @route GET /api/v1/applications/:id
// @access Public 
exports.getApplication = asyncHandler(async (req, res, next) => {
    const application = await Application.find({_id: req.params.id})
    res.status(200).json(application)
})

// @desc update a application
// @route PUT /api/v1/applications/:id
// @access Public 
exports.updateApplication = asyncHandler(async (req, res, next) => {
    const application = await Application.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    })
    res.status(200).json(application)
})

// @desc delete a application
// @route DELETE /api/v1/applications/:id
// @access Public 
exports.deleteApplication = asyncHandler(async (req, res, next) => {
    const application = await Application.findByIdAndDelete(req.params.id)
    res.status(200).json(application)
})