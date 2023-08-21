const { convertError } = require("../helpers/validation_helper");
const { errorResponse } = require("../helpers/response_helper");

function validateRequest(schema) {
    return (request, response, next) => {
        const { error, value } = schema.validate(req[request], { abortEarly: false });

        if (error) {
            const { details } = error;
            const message = convertError(details);

            return errorResponse(response, message);
        }

        request.validatedData = value;

        return next();
    }
}

module.exports = {
    validateRequest,
}