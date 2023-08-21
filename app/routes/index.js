const { successResponse } = require('../helpers/response_helper');
const router = require('express').Router();

/* GET home page. */
router.get('/', function (_request, response, _next) {
    return successResponse(response, 200, {}, 'Welcome to the API');
});

module.exports = router;
