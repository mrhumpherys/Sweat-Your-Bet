const router = require('express').Router();
const { User, Bet, Game } = require('../../models');

router.get('/games', (req, res) => {
  console.log('HEREE');
  res.send('HELLO WORLD');
});
