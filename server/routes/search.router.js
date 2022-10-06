const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

router.get('/:string', (req, res) => {
    console.log('in search GET', req.params.string);
    const searchString = req.params.string;
    
});




module.exports = router;