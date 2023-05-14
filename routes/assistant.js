const express = require('express');
const {
    query
} = require('../controllers/assistant')
const { protect } = require('../middlewares/auth');

const router = express.Router()

router.use(protect);

router.route('/')
    .post(query)

module.exports = router