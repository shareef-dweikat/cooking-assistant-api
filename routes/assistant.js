const express = require('express');
const {
    query
} = require('../controllers/assistant')

const router = express.Router()

router.route('/')
    .post(query)

module.exports = router