const asyncHandler = require('../middlewares/async');
const getQueryTemplateMessage = require('../constants/strings')
const axios = require('axios')

// @desc make a query
// @route POST /api/v1/query/
// @access Private 
exports.query = asyncHandler(async (req, res, next) => {
    const message = getQueryTemplateMessage(req.query.dish)

    const config = {
        headers: {
            "Authorization": process.env.OPENAI_API_KEY,
            "Content-Type": "application/json"
        }
    };

    const data = {
        model: "gpt-3.5-turbo",
        messages: [{ "role": "user", "content": message }]
    }

    let response = await axios.post('https://api.openai.com/v1/chat/completions?', data, config)

    res.status(200).json(response.data)
})
