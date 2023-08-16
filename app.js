require('dotenv').config()
require('./app/helpers/error_messages')

const express = require('express')
const createError = require('http-errors');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const { errorResponse, successResponse } = require('./app/helpers/response_helper');

const app = express();

app.use(logger('dev'));

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));

// routes
app.use(require('./app/routes/routes'));

module.exports = app;