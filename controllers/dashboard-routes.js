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



























// const router = require('express').Router();
// const { Bet, Game, User } = require('../models');
// const fetch = require('node-fetch');
// const moment = require('moment');
// const e = require('express');


// router.get('/', (req, res) => {
//     let logged = req.session.loggedIn
//     if (!logged) {
//         async function getNews() {
//             let response = await
//                 fetch(`https://fly.sportsdata.io/v3/nba/scores/json/News`, {
//                     method: 'GET',
//                     headers: {
//                         'Ocp-Apim-Subscription-Key': process.env.KEY
//                     }
//                 })
//             return response
//         }
//         async function getGames() {
//             date = (moment(new Date()).format("YYYY-MM-DD"));
//             let response = await
//                 fetch(`https://fly.sportsdata.io/v3/nba/scores/json/GamesByDate/${date}`, {
//                     method: 'GET',
//                     headers: {
//                         'Ocp-Apim-Subscription-Key': process.env.KEY
//                     }
//                 })
//             return response
//         }
//         getGames()
//             .then(res => res.json())
//             .then(data => {
//                 const data1 = JSON.stringify(data)
//                 getNews()
//                     .then(res => res.json())
//                     .then(newsData => {
//                         const data2 = JSON.stringify(newsData)
//                         const games = JSON.parse(data1)
//                         const news = JSON.parse(data2)
//                         res.render('homepage', {
//                             news, games, loggedIn: false,
//                         })
//                     })
//             })
//             .catch(err => console.log(err))
//     } else {
//         // CODE TO RUN IF USER IS LOGGED IN WILL DISPLAY THE CURRENT BETS INTO THE ACTIVE BETS ON THE GAME CARDS
//         async function getBets() {
//             // const response = await Bet.findAll({
//             //     // include: [{ model: Game }],
//             // })
//             const bets = Bet.findAll({
//                 include: [{ model: User ,
                    
//                 attributes: ["username"]
//             }],
//             })
//             return bets
//         }
//         async function getNews() {
//             const response = await
//                 fetch(`https://fly.sportsdata.io/v3/nba/scores/json/News`, {
//                     method: 'GET',
//                     headers: {
//                         'Ocp-Apim-Subscription-Key': process.env.KEY
//                     }
//                 })
//             const newsData = await response.json()
//             return newsData
//         }
//         async function getGames() {
//             date = (moment(new Date()).format("YYYY-MM-DD"));
//             const response = await
//                 fetch(`https://fly.sportsdata.io/v3/nba/scores/json/GamesByDate/${date}`, {
//                     method: 'GET',
//                     headers: {
//                         'Ocp-Apim-Subscription-Key': process.env.KEY
//                     }
//                 })
//             const gameData = await response.json()
//             return gameData
//         }

//         getBets()
//             .then(data => {
//                 const dataBet = JSON.stringify(data)
//                 getGames()
//                     .then(data => {
//                         const data1 = JSON.stringify(data)
//                         getNews()
//                             .then(newsData => {
//                                 const data2 = JSON.stringify(newsData)
//                                 const games = JSON.parse(data1)
//                                 const news = JSON.parse(data2)
//                                 const bet = JSON.parse(dataBet)
                            
//                                 console.log(bet)
//                                 res.render('homepage', {
//                                     news, games, bet, loggedIn: true,
//                                 })
//                             })
//                     })
//             })

//             .catch(err => console.log(err))
//     }

// });

// router.get('/bet/:id', (req, res) => {
//     // date = '2021-APR-04'
//     // let id = req.params.id
//     // fetch(`https://fly.sportsdata.io/v3/nba/scores/json/GamesByDate/${date}`, {
//     //     method: 'GET',
//     //     headers: {
//     //         'Ocp-Apim-Subscription-Key': process.env.KEY
//     //     }
//     // })
//     //     .then(res => res.json())
//     //     .then(games => {
//     //         //let game = JSON.stringify(games)
//     //         //let game1 = JSON.parse(game)
//     //         let singleGame = JSON.stringify(games.filter(data => data.GameID === ('16227')))
//     //         console.log(singleGame)
//     //         let game = JSON.parse(singleGame)
//     //         console.log(game)
//     //         res.render('bet', {
//     //             game
//     //         })
//     //     });

//     date = '2021-APR-04'
//     fetch(`https://fly.sportsdata.io/v3/nba/scores/json/GamesByDate/${date}`, {
//         method: 'GET',
//         headers: {
//             'Ocp-Apim-Subscription-Key': process.env.KEY
//         }
//     })
//         .then(res => res.json())
//         .then(games => {

//             res.render(`bet/${req.params.id}`, {
//                 games
//             })
//         });


// });


// module.exports = router;