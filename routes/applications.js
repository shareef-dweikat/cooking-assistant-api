const express = require('express');
const {
    getApplications,
    createApplication,
    getApplication,
    updateApplication,
    deleteApplication
} = require('../controllers/applications')

const router = express.Router()

router.route('/')
    .get(getApplications)
    .post(createApplication)

router.route('/:id')
    .get(getApplication)
    .put(updateApplication)
    .delete(deleteApplication)

module.exports = router