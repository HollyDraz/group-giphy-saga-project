const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// return all favorite images
router.get('/', (req, res) => {
  console.log('in get favorites')
  const queryText = `SELECT "favorites".*, "category"."name" FROM "favorites" 
                    JOIN "category" ON "favorites"."category_id" = "category"."id";`;
  pool.query(queryText)
  .then((result) => {
    res.send(result.rows);
  })
  .catch((error) => {
    console.log(`Error on query ${error}`);
    res.sendStatus(500);
  });
});

// add a new favorite
router.post('/', (req, res) => {
  const newGif = req.body;
  console.log('adding gif', newGif.category);
  const queryText = `INSERT INTO "favorites" ("url", "category_id")
                  VALUES ($1, $2)`;
  pool.query(queryText, [newGif.gif, newGif.category])
  .then((result) => {
    res.sendStatus(200);
  }).catch(error => {
    console.log('error adding a new Gif in routes', error);
    res.sendStatus(500)
  })
});

// update given favorite with a category id
router.put('/:favId', (req, res) => {
  // req.body should contain a category_id to add to this favorite image
  res.sendStatus(200);
});


// delete a favorite
router.delete('/', (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
