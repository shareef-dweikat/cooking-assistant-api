const Application = require('../models/Application')
const asyncHandler = require('../middlewares/async');
const crypto = require('crypto');
const bcrypt = require('bcryptjs');

// @desc get all applications
// @route GET /api/v1/applications/
// @access Public 
exports.getApplications = asyncHandler(async (req, res, next) => {
    let query = Application.find({user: req.user._id})
    const applications = await query
    res.status(200).json(applications)
})

// @desc create a application
// @route POST /api/v1/applications/
// @access Private 
exports.createApplication = asyncHandler(async (req, res, next) => {
    const appKey = crypto.randomUUID()
    
    const salt = await bcrypt.genSalt(10);
    const hashedAppKey = await bcrypt.hash(appKey, salt);
    const application = await Application.create({...req.body, appKey: hashedAppKey})
   
    application.appKey = appKey
    
    res.status(200).json(application)
})

// @desc get a application
// @route GET /api/v1/applications/:id
// @access Private 
exports.getApplication = asyncHandler(async (req, res, next) => {
    const application = await Application.find({_id: req.params.id})
    res.status(200).json(application)
})

// @desc update a application
// @route PUT /api/v1/applications/:id
// @access Private 
exports.updateApplication = asyncHandler(async (req, res, next) => {
    const application = await Application.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    })
    res.status(200).json(application)
})

// @desc delete a application
// @route DELETE /api/v1/applications/:id
// @access Private 
exports.deleteApplication = asyncHandler(async (req, res, next) => {
    const application = await Application.findByIdAndDelete(req.params.id)
    res.status(200).json(application)
})