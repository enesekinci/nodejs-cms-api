const { successResponse } = require("../../helpers/response_helper");

const register = (request, response, next) => {
    return successResponse(response, 200, 'ok');
}

module.exports = register;
