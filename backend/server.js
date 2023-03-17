require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require("cors");

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });

const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to database...'))


app.use(cors());
app.use(express.json());


const bmiRouter = require('./routers/bmiRouter');
app.use('/bmi', bmiRouter);


app.listen(3000, 'localhost', () => console.log('Server is running...'));