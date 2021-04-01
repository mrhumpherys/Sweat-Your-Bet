const router = require('express').Router();
const { Bet, Game, User } = require('../../models');

router.get('/', (req, res) => {
    Game.findAll({}).then(dbGameData => res.json(dbGameData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});


router.get('/:id', (req, res) => {
    GameFindOne({
        where: {
            id: req.params.id
        }
    })
})
module.exports = router;