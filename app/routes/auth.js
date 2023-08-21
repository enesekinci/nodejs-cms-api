const express = require('express');
const router = express.Router();

const validateRequest = require('../middlewares/validate_request');

router.post('/register', validateRequest('register'), require('../controllers/auth/register'));

router.post('/refresh-token', require('../controllers/auth/refresh_token'));

module.exports = router;
