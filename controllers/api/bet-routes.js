const router = require('express').Router();
const { User, Bet } = require('../../models');

// Get all bets
router.get('/', (req, res) => {
  Bet.findAll({})
    .then(dbBetData => res.json(dbBetData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', async (req, res) => {
  host_id = req.body.host_id;
  wager = req.body.wager;
  game_id = req.body.game_id;
  let bet = await Bet.create({
    host_id,
    wager,
    game_id,
  });

  let user = await User.findByPk(host_id);
  user.bet(wager);
  user.save();
  res.json(bet);
});

//! TODO
//? PUT REQUEST TO ACCEPT A BET
router.put('/:id', (req, res) => {
  //! challenger_id from session.user_id
});

module.exports = router;
