'use restrict';

const express    = require('express');
const router     = express.Router();
const controller = require('../../controllers/sales/product.controller');

router.get('/home', controller.getHome );
router.put('/:id/sold', controller.putSold );
router.get('/:id/sold', controller.putSold );

module.exports = router;