const express = require('express');
const router = express.Router();
// import the pool to connect to the database.
const pool = require('../modules/pool');

// setup get request.
router.get('/', (req, res) => {
    // set up the sql query text.
    const queryText = 'SELECT * FROM "feedback" ORDER BY "date" DESC, "id" DESC;';
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
    VALUES ($1, $2, $3, $4) RETURNING *;`;
    // setting up the values to put into the query.
    const values = [par.feeling, par.understanding, par.support, par.comments];
    pool.query(queryText, values)
    .then((response) => {
        res.status(201).send(response.rows);
    })
    .catch(err => {
        console.log('Error in POST /feedback', err);
        res.sendStatus(500);
    });
});

// DELETE request to /feedback/:feedbackId
router.delete('/:feedbackId', (req, res) => {
    console.log('In DELETE /feedback', req.params.feedbackId);
    const feedbackId = req.params.feedbackId;
    // setup sql query text with data sanitization.
    const queryText = `DELETE FROM "feedback" WHERE "id" = $1;`;
    pool.query(queryText, [feedbackId])
    .then(() => {
        console.log(`Successful DELETE /feedback/${feedbackId}`);
        res.sendStatus(200);
    })
    .catch(err => {
        console.log(`Error in DELETE /feedback/${feedbackId}`, err);
        res.sendStatus(500);
    });
});

// PUT request to /feedback/:feedbackId
router.put('/:feedbackId', (req,res) => {
    const feedbackId = req.params.feedbackId;
    console.log(`In PUT /feedback/${feedbackId}`);
    // Update the flagged value to be the opposite of its current value.
    const queryText = `UPDATE "feedback" SET "flagged" = NOT "flagged" WHERE "id" = $1;`;
    pool.query(queryText, [feedbackId])
    .then(() => {
        console.log(`Successful PUT /feedback/${feedbackId}`);
        res.sendStatus(201);
    })
    .catch(err => {
        console.log(`Error in PUT /feedback/${feedbackId}`, err);
        res.sendStatus(500);
    });
});

module.exports = router;