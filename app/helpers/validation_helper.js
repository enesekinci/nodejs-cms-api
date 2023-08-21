const { EMAIL, PATTERN, REQUIRED, STRING } = require('./error_messages');

function convertErrorToCode(key, rule) {

    const rules = {
        'string.email': EMAIL,
        'string.pattern.base': PATTERN,
        'string.min': STRING,
        'any.required': REQUIRED,

    };

    if (rules.hasOwnProperty(rule)) {
        return rules[rule];
    }

    throw new Error('Unknown error');
}

function convertErrors(errors) {
    const result = {};

    errors.forEach(error => {

        const key = error.context.key;

        const rule = error.type;

        if (!result.hasOwnProperty(key)) {
            result[key] = [];
        }

        const errorCode = convertErrorToCode(key, rule);

        result[key].push(errorCode);
    });

    return result;
}


module.exports = {
    convertErrors,
    convertErrorToCode,
};