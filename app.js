const express = require('express');

const colors = require('colors');


const app = express()

app.use(express.json())

const PORT = process.env.PORT || 5000

const server = app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} ${PORT}`.yellow.bold))