'use restrict';

const express    = require('express');
const router     = express.Router();
const controller = require('../../controllers/sales/product.controller');

router.get('/home', controller.getHome );

module.exports = router;