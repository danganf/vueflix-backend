'use restrict';

const express    = require('express');
const router     = express.Router();
const controller = require('../controllers/genre.controller');

router.get('/:media/', controller.getList );

module.exports = router;