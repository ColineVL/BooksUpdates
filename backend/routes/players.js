const express = require('express');

const router = express.Router();
const players = [
  { _id: 1, name: 'Sachin', runs: '18426' },
  { _id: 2, name: 'Dhoni', runs: '10500' },
  { _id: 3, name: 'Virat', runs: '10843' },
];

router.get('/', async (req, res) => {
  res.send('home page players');
});

router.get('/list', async (req, res) => {
  try {
    res.status(200).json({
      data: players,
    });
  } catch (err) {
    res.status(400).json({
      message: 'Some error occured',
      err,
    });
  }
});

module.exports = router;
