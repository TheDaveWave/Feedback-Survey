const express = require('express');
const router = express.Router();
// import the pool to connect to the database.
const pool = require('../modules/pool');

// setup get request.
router.get('/', (req, res) => {
    // set up the sql query text.
    const queryText = 'SELECT * FROM "feedback" ORDER BY "date", "id";';
    pool.query(queryText)
    .then((response) => {
        res.send(response.rows);
    })
    .catch(err => {
        console.log('Error getting feedback');
        res.sendStatus(500);
    })
});

module.exports = router;