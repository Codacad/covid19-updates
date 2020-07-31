const express = require('express');
const cors = require('cors');
const morgan =require('morgan');
const ejsLayoute = require('express-ejs-layouts');
const path = require('path');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(ejsLayoute)
app.set('view engine', 'ejs')

const PORT = process.env.PORT || 5000;

app.use('/', require('./routes/index'))
app.listen(PORT, function(error){
    if (error) {
        throw error
    }
    console.log(`Server is running on PORT ${process.env.PORT} and evironment is ${process.env.NODE_ENV}`)
})