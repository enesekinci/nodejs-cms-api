const successResponse = (res, status = 200, data = {}, message = '') => {

    const body = {};

    body.status = status || 200;

    if (message) {
        body.message = message;
    }

    Object.keys(data).forEach(key => {
        body[key] = data[key];
    });

    res.status(status).json(body);
}

const errorResponse = (res, status = 500, message = '') => {
    const body = {};

    body.status = status || 500;

    body.message = message || 'Something went wrong';

    res.status(status).json(body);
}

module.exports = {
    successResponse,
    errorResponse,
}