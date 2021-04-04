const router = require('express').Router();
const { Bet, Game, User } = require('../models');
const NBA = require('../db/_data/nba');



router.get('/', (req, res) => {
     new NBA().getNews()
    Game.findAll({})
        .then(dbGamedata => {
            if (!dbGamedata) {
                res.status(404).json({ message: 'No Games on this date' });
                return;
            }
            res.render('homepage', {
                // games
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });

});

// router.get('/login', (req, res) => {
//     if (req.session.loggedIn) {
//       res.redirect('/');
//       return;
//     }

//     res.render('login');
//   });

module.exports = router;
