// Libraries
const express = require('express');
const authorsController = require('../controllers/authors');

const router = express.Router();

router.get('/', async (req, res) => {
  res.send('home page authors');
});

router.get('/search', (req, res) => {
  authorsController.searchAuthor(req.body.name)
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
