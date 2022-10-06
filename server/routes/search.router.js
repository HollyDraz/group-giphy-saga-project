const { default: axios } = require('axios');
const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

router.get('/:string', (req, res) => {
    console.log('in search GET', req.params.string);
    const searchString = req.params.string;
    axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_API_KEY}&q=${searchString}&limit=10&rating=g&lang=en`)
        .then((response) => {
            console.log(response.data);
            res.send(response.data);
        })
        .catch((error) => {
            console.log('ERROR in search GET /:string', error);
            res.sendStatus(500);
        });
});


module.exports = router;