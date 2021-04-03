const router = require('express').Router();
const { Bet, Game, User } = require('../models');
const NBA = require('../db/_data/nba');



router.get('/', (req, res) => {
    let gameDate = '2021-APR-02'
    let gamesByDate = new NBA().getGamesByDate(gameDate);
    Game.findAll()
    .then(dbGameData => res.json(dbGameData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
    res = gamesByDate;
    console.log(res);
});


router.get('/:id', (req, res) => {
    GameFindOne({
        where: {
            id: req.params.id
        }
    })
})


module.exports = router;