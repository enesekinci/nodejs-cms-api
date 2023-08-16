const createHttpError = require('http-errors');
const { errorResponse } = require('../helpers/response_helper');

const router = require('express').Router();

router.use('/', require('./index'));

router.use('/auth', require('./auth'));

// catch 404 and forward to error handler
router.use((_request, _response, next) => next(createHttpError(404)));

// error handler
router.use((error, _request, response, _next) => errorResponse(response, error.status, error.message));

module.exports = router;