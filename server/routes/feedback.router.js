const express = require('express');
const router = express.Router();
// import the pool to connect to the database.
const pool = require('../modules/pool');

// setup get request.
router.get('/', (req, res) => {
    // set up the sql query text.
    const queryText = 'SELECT * FROM "feedback" ORDER BY "date" DESC, "id";';
    pool.query(queryText)
    .then((response) => {
        res.send(response.rows);
    })
    .catch(err => {
        console.log('Error getting feedback', err);
        res.sendStatus(500);
    });
});

// POST request to /feedback.
router.post('/', (req, res) => {
    console.log('In POST /feedback',req.body);
    const par = req.body;
    // sanitzing the data in the query text.
    const queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
    VALUES ($1, $2, $3, $4);`;
    // setting up the values to put into the query.
    const values = [par.feeling, par.understanding, par.support, par.comments];
    pool.query(queryText, values)
    .then(() => {
        res.sendStatus(201);
    })
    .catch(err => {
        console.log('Error in POST /feedback', err);
        res.sendStatus(500);
    });
});

module.exports = router;