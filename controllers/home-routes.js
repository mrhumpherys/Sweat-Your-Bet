const router = require('express').Router();
const { Bet, Game, User } = require('../models');
const NBA = require('../db/_data/nba');
const fetch = require('node-fetch');



router.get('/', (req, res) => {
    // ALSO NEED TO GET USER STATS TO RENDER FOR DASHBOARD VIEW
    // WILL NEED TO CONVERT TO ASYNC WHEN GRABBING BOTH DATA SETS
    // COPIED FROM DASHBOARD ROUTE
    // ==================================================================
    async function getNews(){
        date = '2021-APR-03'
        let response = await  
        fetch(`https://fly.sportsdata.io/v3/nba/scores/json/NewsByDate/${date}`, {
            method: 'GET',
            headers: {
                'Ocp-Apim-Subscription-Key': process.env.KEY
            }
        })
        return response
    }
    async function getGames(){
        date = '2021-APR-03'
        let response = await  
        fetch(`https://fly.sportsdata.io/v3/nba/scores/json/GamesByDate/${date}`, {
            method: 'GET',
            headers: {
                'Ocp-Apim-Subscription-Key': process.env.KEY
            }
        })
        return response
    }
    getGames()
    .then(res=> res.json())
    .then(data =>{
        const games = JSON.stringify(data)
        // console.log(games)
        getNews()
        .then(res=> res.json())
        .then(newsData =>{
            const news = JSON.stringify(newsData)
            console.log({games:games})
            console.log(`\n${news}`)
            
            // res.render('homepage',{
            //     news, games 

            // })
        })
    })
    .catch(err => console.log(err))
    // =================================================================================

    // date = '2021-APR-03'
    // fetch(`https://fly.sportsdata.io/v3/nba/scores/json/GamesByDate/${date}`, {
    //     method: 'GET',
    //     headers: {
    //         'Ocp-Apim-Subscription-Key': process.env.KEY
    //     }
    // })
    //     .then(res => res.json())
    //     .then(games => {
    //         console.log('GAME DATA I WANT:', games)
    //         res.render('dashboard', {
    //             games
    //         })
    //     });
    

});

// router.get('/login', (req, res) => {
//     if (req.session.loggedIn) {
//       res.redirect('/');
//       return;
//     }

//     res.render('login');
//   });

module.exports = router;
