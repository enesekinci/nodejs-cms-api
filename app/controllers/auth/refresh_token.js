const Joi = require('joi');
const { convertError } = require('../../helpers/validation_helper');

const refreshToken = (request, response, next) => {
    return response.status(200).json({ message: 'ok' });
}

module.exports = refreshToken;