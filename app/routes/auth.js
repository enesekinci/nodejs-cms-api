const express = require('express');
const router = express.Router();

const register = require('../controllers/auth/register');

const refreshToken = require('../controllers/auth/refresh_token');

router.post('/register', register);

router.post('/refresh-token', refreshToken);

module.exports = router;
