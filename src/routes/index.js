'use restrict';

const express = require('express');
const router  = express.Router();

router.get('/', ( req, res, next ) => {
    res.status(200).send({
        title: "VUEFLIX API",
        version: "0.0.5"
    });
} );

module.exports = router;