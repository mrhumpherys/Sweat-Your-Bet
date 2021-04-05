const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const { User, Bet, Game } = require('../../models');

//! ----------------------------------------
//! |       (C)REATE NEW BET               |
//! ----------------------------------------
// prettier-ignore
router.post('/', asyncHandler(async (req, res) => {
  host_id = req.session.user_id ? req.session.user_id : req.body.user_id ? req.body.user_id : 1;
  let { wager, game_id, pick_team_id } = req.body;

  let bet = await Bet.create({ host_id, wager, game_id, pick_team_id });

  let user = await User.findByPk(host_id);
  user.decrement('balance', { by: wager });
  res.json(bet);
}));

//! ----------------------------------------
//! |      (R)EAD:  ALL BETS               |
//! ----------------------------------------
// prettier-ignore
router.get('/', asyncHandler(async (req, res) => {
  res.json(await Bet.findAll({ include: Game }));
}));

//! ----------------------------------------
//! |      (R)EAD: BET BY ID               |
//! ----------------------------------------
// prettier-ignore
router.get('/:id', asyncHandler(async(req, res) => {
  res.json( await Bet.findByPk(req.params.id, { include: Game }));
}));

//! ----------------------------------------
//! |     (U)PDATE: ACCEPT BET             |
//! ----------------------------------------
//? PUT REQUEST TO ACCEPT A BET
// prettier-ignore
router.put('/:id', asyncHandler(async(req, res) => {
  // let challenger_id = req.session.user_id;
  // req.body = challenger
  let bet = await Bet.update({ challenger_id: req.session.user_id ? req.session.user_id : req.body.user_id }, { where: { id: req.params.id } });
  res.json(bet);

  // ONCE SESSION IS UPDATED
  // bet.update({challenger_id: req.session.user_id}
}));

//! ----------------------------------------
//! |      (D)ELETE: BET BY ID             |
//! ----------------------------------------
// prettier-ignore
router.delete('/:id', asyncHandler(async(req, res) => {
  await Bet.destroy({ where: { id: req.params.id } });
  res.json( { message: `Bet with id: ${req.params.id} deleted successfully`});
}));

module.exports = router;
