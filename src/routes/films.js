'use restrict';

const express = require('express');
const router  = express.Router();
const controller = require('../controllers/film.controller');

router.get('/home', controller.getHome );
router.get('/:id' , controller.getDetail );

module.exports = router;