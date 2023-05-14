const express = require('express');
const {
    getApplications,
    createApplication,
    // getApplication,
    // updateApplication,
    // deleteApplication
} = require('../controllers/applications')

const { protect, authorize } = require('../middlewares/auth');

const router = express.Router()

router.use(protect);

router.route('/')
    .get(getApplications)
    .post(createApplication)

// router.route('/:id')
//     .get(getApplication)
//     .put(updateApplication)
//     .delete(deleteApplication)

module.exports = router