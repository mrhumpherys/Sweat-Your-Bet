const router = require("express").Router();
const { User, Bet, Game } = require("../../models");

// Get all bets
router.get("/", (req, res) => {
  Bet.findAll({
    // include: [{ model: Game }],
  })
    .then((dbBetData) => res.json(dbBetData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/", async (req, res) => {

  host_id = req.session.user_id;
  wager = req.body.wager;
  game_id = req.body.game_id;
  pick_team_id = req.body.pick_team_id;
 Bet.create({
    host_id,
    wager,
    game_id,
    pick_team_id,
  }).
  then(dbBetData => res.json(dbBetData))
  .catch(err => {
      console.log(err);
      res.status(400).json(err);
  });

  // let user = await User.findByPk(host_id);
  // user.bet(wager);
  // user.save();
  // res.json(bet);
});

//! TODO
//? PUT REQUEST TO ACCEPT A BET
router.put("/:id", (req, res) => {
  // let challenger_id = req.session.user_id;
  // req.body = challenger
  Bet.update({challenger_id: req.body.challenger_id}, {
    where: {
      id: req.params.id,
    },
  })
    .then((dbBetData) => {
      if (!dbBetData) {
        res.status(404).json({ message: "No User found with this id" });
        return;
      }
      res.json(dbBetData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// ONCE SESSION IS UPDATED 
// bet.update({challenger_id: req.session.user_id}

module.exports = router;
