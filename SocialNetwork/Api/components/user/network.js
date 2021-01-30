const express = require('express');

const response = require('../../../Network/response');

const router = express.Router()

router.get('/', function (req, res) {
    response.success(req, res, 'Todo sigue bien', 200);
})

module.exports = router;