const successResponse = (response, status = 200, data = {}, message = '') => {

    const body = {};

    body.status = status || 200;

    if (message) {
        body.message = message;
    }

    Object.keys(data).forEach(key => {
        body[key] = data[key];
    });

    response.status(status).json(body);
}

const errorResponse = (response, status = 500, message = '') => {
    const body = {};

    body.status = status || 500;

    body.message = message || 'Something went wrong';

    return response.status(status).json(body);
}

module.exports = {
    successResponse,
    errorResponse,
}