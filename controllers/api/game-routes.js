const router = require('express').Router();
const { Bet, Game, User } = require('../../models');
// const NBA = require('../db/_data/nba');

router.get('/', async (req, res) => {
  games = await Game.findAll({
    include: Bet,
  });
  res.json(games);
});

// router.get('/', (req, res) => {
//   let gameDate = '2021-APR-02';
//   let gamesByDate = new NBA().getGamesByDate(gameDate);
//   Game.findAll()
//     .then(dbGameData => res.json(dbGameData))
//     .catch(err => {
//       console.log(err);
//       res.status(500).json(err);
//     });
//   res = gamesByDate;
//   console.log(res);
// });

router.get('/:id', async (req, res) => {
  let game = await Game.findByPk(req.params.id);
  res.json(game);
});

router.post('/', async (req, res) => {});

module.exports = router;
