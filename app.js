const path = require('path');
const cors = require('cors');

const dotenv = require('dotenv');
dotenv.config({ path: './config/config.env' });

const express = require('express');
const products = require('./routes/products')
const applications = require('./routes/applications')
const assistant = require('./routes/assistant')
const users = require('./routes/users');
const auth = require('./routes/auth');

const connectDB = require('./config/db')
const colors = require('colors');

connectDB();

const app = express()

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json())

app.use('/api/v1/products/', products)
app.use('/api/v1/applications/', applications)
app.use('/api/v1/assistant/', cors(), assistant)
app.use('/api/v1/admin/users/', users);
app.use('/api/v1/auth/', auth);

const PORT = process.env.PORT || 5000

const server = app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} ${PORT}`.yellow.bold))
