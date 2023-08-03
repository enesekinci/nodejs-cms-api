const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function (_, response, _) {
    return response.status(200).json({
        message: 'Hello World!'
    });
});

module.exports = router;
