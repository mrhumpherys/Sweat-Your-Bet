const router = require('express').Router();
const { Bet, Game, User } = require('../models');
const NBA = require('../db/_data/nba');
const fetch = require('node-fetch');;
const moment = require('moment');




router.get('/', (req, res) => {
    let logged = req.session.loggedIn
    if (!logged) {
        res.redirect('/')
    }

    // ALSO NEED TO GET USER STATS TO RENDER FOR DASHBOARD VIEW
    // WILL NEED TO CONVERT TO ASYNC WHEN GRABBING BOTH DATA SETS
    // ==================================================================
    // async function getGames(){
    //     date = '2021-APR-03'
    //     let response = await  
    //     fetch(`https://fly.sportsdata.io/v3/nba/scores/json/GamesByDate/${date}`, {
    //         method: 'GET',
    //         headers: {
    //             'Ocp-Apim-Subscription-Key': process.env.KEY
    //         }
    //     })
    //     return response
    // }
    // getGames()
    // .then(res=> res.json())
    // .then(data =>{
    //     const games = JSON.stringify(data)
    //     console.log({games: games})
    // })
    // .catch(err => console.log(err))
    // =================================================================================

    date = (moment(new Date()).format("YYYY-MM-DD"));
    fetch(`https://fly.sportsdata.io/v3/nba/scores/json/GamesByDate/${date}`, {
        method: 'GET',
        headers: {
            'Ocp-Apim-Subscription-Key': process.env.KEY
        }
    })
        .then(res => res.json())
        .then(games => {
        
            res.render('dashboard', {
                games, loggedIn: true
            })
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
    res.render('activeBets', {
        style: "style.css",
        loggedIn: req.session.loggedIn
    });
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