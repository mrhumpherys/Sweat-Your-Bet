const router = require('express').Router();
const { Bet, Game, User } = require('../../models');
// const NBA = require('../db/_data/nba');

router.get('/', async (req, res) => {
  games = await Game.findAll({
    // include: Bet,
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

router.post('/', async (req, res) => {
  Game.create({
    GameID: req.body.GameID,
    Status: req.body.Status,
    DateTime: req.body.DateTime,
    HomeTeamID: req.body.HomeTeamID,
    HomeTeam: req.body.HomeTeam,
    HomeTeamScore: req.body.HomeTeamScore,
    HomeTeamWin: null,
    AwayTeamID: req.body.AwayTeamID,
    AwayTeam: req.body.AwayTeam,
    AwayTeamScore: req.body.AwayTeamScore,
    GameEndDateTime: req.body.GameEndDateTime,
  })
  .then(daGameData => {
    res.json(daGameData);
  })
  .catch(err => {
      console.log(err);
      res.status(500).json(err);
  });
  // game_id = req.body.game_id;

  // let { wager, game_id, pick_team_id } = req.body;

  // let user = await User.findByPk(host_id);
  // //* WHETHER OR NOT TO DECREMENT, ALERT USER IF INSUFFICIENT FUNDS
  // if (user.balance >= wager) {
  //   bet = await Bet.create({ host_id, wager, game_id, pick_team_id });
  //   user.decrement('balance', { by: wager });
  //   res.json(bet);
  // } else res.json({ message: "Unable to process bet, insufficent funds" })
  
});

module.exports = router;
