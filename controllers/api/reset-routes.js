const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const { User, Bet, Game } = require('../../models');

// prettier-ignore
router.get('/users', asyncHandler(async (req, res) => {
  await User.sync({ force: true });
  res.send('User table reset');
}));

// prettier-ignore
router.get('/games', asyncHandler(async (req, res) => {
  await Game.destroy({ where: {}, force: true });
  await Game.sync({ force: true });
  res.send('Game table reset');
}));

// prettier-ignore
router.get('/bets', asyncHandler(async (req, res) => {
  await Bet.sync({ force: true });
  res.send('Bet table reset');
}));

module.exports = router;
