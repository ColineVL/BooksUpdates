// Libraries
const express = require('express');
const authorsController = require('../controllers/authors');

const router = express.Router();

router.get('/', async (req, res) => {
    res.send('home page authors');
});

/**
 * Searches on the BNF data the list of authors with a given name.
 * @param {String} req.query.name Name of the author you are looking for
 */
router.get('/search', (req, res) => {
    authorsController.searchAuthor(req.query.name)
        .then((result) => {
            res.status(200).json({
                data: result,
            });
        })
        .catch((err) => {
            res.status(400).json({
                message: 'Some error occured',
                err,
            });
        });
});

/**
 * Upserts an author to the database.
 * @param {String} req.body.name The name of the author
 * @param {String} req.body.link The link to the author's page on the BNF
 * @param {Boolean} req.body.favorite True if the author is a favorite, false otherwise
 */
router.post('/upsert', (req, res) => {
    authorsController.upsertAuthorToDb(req.body)
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((err) => {
            res.status(400).json({
                message: 'Some error occured',
                err,
            });
        });
});

router.get('/favorites', (req, res) => {
    authorsController.getFavorites()
        .then((result) => {
            res.status(200).json({
                data: result,
            });
        })
        .catch((err) => {
            res.status(400).json({
                message: 'Some error occured',
                err,
            });
        });
});

module.exports = router;
