const { EMAIL, PATTERN, REQUIRED, STRING } = require('./error_messages');

function convertErrorToCode(error) {
    switch (error) {
        case 'string.email':
            return EMAIL;
        case 'string.pattern.base':
            return PATTERN;
        case 'string.empty':
            return REQUIRED;
        case 'any.required':
            return REQUIRED;
        case 'string.base':
            return STRING;
        default:
            return error;
    }
}

function convertErrors(error) {
    const result = {};

    error.forEach(error => {
        result[error.context.key] = convertErrorToCode(error);
    });

    console.log('error', error);
    console.log('result', result);

    return result;
}


module.exports = {
    convertErrors,
    convertError,
};