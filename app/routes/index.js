const { successResponse } = require('../helpers/response_helper');
const router = require('express').Router();

/* GET home page. */
router.get('/', function (request, response, next) {
    return successResponse(response, 200, {}, 'Welcome to the API');
});

module.exports = router;
