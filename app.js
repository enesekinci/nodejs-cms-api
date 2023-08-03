const express = require('express')
const createError = require('http-errors');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const app = express()


app.use(logger('dev'));

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', require('./app/routes/index'));

// catch 404 and forward to error handler
app.use(function (_, _, next) {
    next(createError(404));
});

// error handler
app.use(function (error, request, response, _) {
    // set locals, only providing error in development
    response.locals.message = error.message;
    response.locals.error = request.app.get('env') === 'development' ? error : {};

    return response.status(error.status || 500)
        .json({ error: error.message });
});

module.exports = app;