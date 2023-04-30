const path = require('path');

const dotenv = require('dotenv');
dotenv.config({path: './config/config.env'});

const express = require('express');
const products = require('./routes/products')
const connectDB = require('./config/db')
const colors = require('colors');
// const errorHandler = require('./middlewares/error');

connectDB();

const app = express()

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json())

app.use('/api/v1/products/', products)

// app.use(errorHandler)

const PORT = process.env.PORT || 5000

const server = app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} ${PORT}`.yellow.bold))
