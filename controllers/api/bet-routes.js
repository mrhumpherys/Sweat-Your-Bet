const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const {
  User,
  Bet,
  Game
} = require('../../models');

//! ----------------------------------------
//! |       (C)REATE NEW BET               |
//! ----------------------------------------
// prettier-ignore
router.post('/', asyncHandler(async (req, res) => {
  host_id = req.session.user_id ? req.session.user_id : req.body.user_id ? req.body.user_id : 1;
  let {
    wager,
    game_id,
    pick_team_id
  } = req.body;

  host_id = req.session.user_id;
  wager = req.body.wager;
  game_id = req.body.game_id;
  pickTeamID = req.body.pickTeamID;
  Bet.create({
    host_id,
    wager,
    game_id,
    pickTeamID,
  }).
    then(dbBetData => res.json(dbBetData))
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    });
  let user = await User.findByPk(host_id);
  //* WHETHER OR NOT TO DECREMENT, ALERT USER IF INSUFFICIENT FUNDS
  if (user.balance >= wager) {
    bet = await Bet.create({
      host_id,
      wager,
      game_id,
      pick_team_id
    });
    user.decrement('balance', {
      by: wager
    });
    res.json(bet);
  } else res.json({
    message: "Unable to process bet, insufficent funds"
  })

}));

//! ----------------------------------------
//! |      (R)EAD:  ALL BETS               |
//! ----------------------------------------
// prettier-ignore
router.get('/', asyncHandler(async (req, res) => {
  res.json(await Bet.findAll({
      include: [
        {
          model: Game
        },
        {
          model: User,}
          
      ]
    })
  );

//   res.json(await Game.findAll(
//     {
//       include: [
//         {
//           model: Bet,
//           include: {
//             model: User,
//             attributes: ['username']
//           }
          
//         }
//       ]
//   }
//   )
// )
}));

//! ----------------------------------------
//! |      (R)EAD: BET BY ID               |
//! ----------------------------------------
// prettier-ignore
router.get('/:id', asyncHandler(async (req, res) => {
<<<<<<< HEAD
  res.json(await Bet.findByPk(req.params.id, { include: Game }));
=======
  res.json(await Bet.findByPk(req.params.id, {
    include: Game
  }));
>>>>>>> feature/stash
}));

//! ----------------------------------------
//! |     (U)PDATE: ACCEPT BET             |
//! ----------------------------------------
//? PUT REQUEST TO ACCEPT A BET
// prettier-ignore
router.put('/:id', asyncHandler(async (req, res) => {
<<<<<<< HEAD
  // let challenger_id = req.session.user_id;
  // req.body = challenger
  let bet = await Bet.update({ challenger_id: req.session.user_id ? req.session.user_id : req.body.user_id }, { where: { id: req.params.id } });
  res.json(bet);
=======
  let bet = await Bet.findByPk(req.params.id);
  let challenger_id = req.session.user_id ? req.session.user_id : req.body.user_id ? req.body.user_id : 1;

  console.log(bet);
  console.log(challenger_id);

  let user = await User.findByPk(challenger_id);
  if (user.balance >= bet.wager) {
    user.decrement('balance', {
      by: bet.wager
    });
    res.json(await bet.update({
      challenger_id: challenger_id
    }));
  } else res.json({
    message: "Unable to accept bet, insufficent funds!"
  });
>>>>>>> feature/stash

  // ONCE SESSION IS UPDATED
  // bet.update({challenger_id: req.session.user_id}
}));

//! ----------------------------------------
//! |      (D)ELETE: BET BY ID             |
//! ----------------------------------------
// prettier-ignore
router.delete('/:id', asyncHandler(async (req, res) => {
<<<<<<< HEAD
  await Bet.destroy({ where: { id: req.params.id } });
  res.json({ message: `Bet with id: ${req.params.id} deleted successfully` });
}));

module.exports = router;



=======
  await Bet.destroy({
    where: {
      id: req.params.id
    }
  });
  res.json({
    message: `Bet with id: ${req.params.id} deleted successfully`
  });
}));

module.exports = router;
>>>>>>> feature/stash
