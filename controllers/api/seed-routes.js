const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const { User, Bet, Game } = require('../../models');
const fs = require('fs');

const getUrl = x => `./controllers/api/seed-data/seed-${x}-data.json`;

// prettier-ignore
router.get('/users', asyncHandler(async (req, res) => {
  await User.bulkCreate(JSON.parse(fs.readFileSync(getUrl('user'))));
  res.json(await User.findAll());
}));

// prettier-ignore
router.get('/bets', asyncHandler(async (req, res) => {
  await Bet.bulkCreate(JSON.parse(fs.readFileSync(getUrl('bet'))));
  res.json(await Bet.findAll());
}));

// prettier-ignore
router.get('/games', asyncHandler(async (req, res) => {
  await Game.bulkCreate(JSON.parse(fs.readFileSync(getUrl('game'))));
}));

module.exports = router;
