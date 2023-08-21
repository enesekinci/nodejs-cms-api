const { convertErrors } = require("../helpers/validation_helper");
const { errorResponse } = require("../helpers/response_helper");
const createHttpError = require("http-errors");

const schemas = require("../validations/schemas");

const validateRequest = schema => {

    if (typeof schema !== "string" || !schemas.hasOwnProperty(schema)) {
        throw new Error("Invalid schema name");
    }

    schema = schemas[schema];

    return async function (request, response, next) {

        try {

            const validated = await schema.validateAsync(request.body, { abortEarly: false });

            request.body = validated;

            return next();

        } catch (error) {

            if (error.isJoi) {

                const errorObject = convertErrors(error.details);

                return errorResponse(response, 422, errorObject);
            }

            return next(createHttpError(500));
        }
    }
};

module.exports = validateRequest;