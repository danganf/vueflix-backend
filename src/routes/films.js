'use restrict';

const express = require('express');
const router  = express.Router();
const controller = require('../controllers/film.controller');

router.get('/home'      , controller.getHome );
router.get('/:media/:id', controller.getDetail );

module.exports = router;