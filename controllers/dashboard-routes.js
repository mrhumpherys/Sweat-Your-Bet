const router = require('express').Router();
const { Bet, Game, User } = require('../models');
const NBA = require('../db/_data/nba');



router.get('/', (req, res) => {
    Game.findAll({})
    .then( dbGamedata => {
        if(!dbGamedata) {
            res.status(404).json({ message: 'No Games on this date' });
            return;
        }
        res.render('dashboard', {
            // games
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });

});

router.get("/activeBets", (req, res) => {
    //Bet.findAll({
    //    where: {
    //        host_id: req.session.user_id
    //    }, not sure how to set up or statements but ill dig into it.
    //    where: {
    //        challenger_id: req.session.user_id
    //    }
    //})
        res.render('activeBets');
        return;
    
    
    
});

router.get("/history", (req, res) => {
    //Bet.findAll({
    //    where: {
    //        host_id: req.session.user_id
    //    }, not sure how to set up or statements but ill dig into it.
    //    where: {
    //        challenger_id: req.session.user_id
    //    }
    //})
        res.render('history');
        return;
    
    
    
});

module.exports = router;