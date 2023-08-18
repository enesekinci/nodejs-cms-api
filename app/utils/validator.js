const { convertError } = require("../helpers/validation_helper");

function validate(schema, data) {

    const { error, value } = schema.validate(data, { abortEarly: false });

    let message;

    if (error) {
        const { details } = error;
        message = convertError(details);
    }

    return { message, value };
}

module.exports = {
    validate
}