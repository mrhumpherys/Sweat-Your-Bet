const router = require("express").Router();
const { Bet, Game, User } = require("../models");
const fetch = require("node-fetch");
const moment = require("moment");

router.get("/", (req, res) => {
  let logged = req.session.loggedIn;
  if (!logged) {
    async function getNews() {
      let response = await fetch(
        `https://fly.sportsdata.io/v3/nba/scores/json/News`,
        {
          method: "GET",
          headers: {
            "Ocp-Apim-Subscription-Key": process.env.KEY,
          },
        }
      );
      return response;
    }
    async function getGames() {
      date = moment(new Date()).format("YYYY-MM-DD");
      let response = await fetch(
        `https://fly.sportsdata.io/v3/nba/scores/json/GamesByDate/${date}`,
        {
          method: "GET",
          headers: {
            "Ocp-Apim-Subscription-Key": process.env.KEY,
          },
        }
      );
      return response;
    }
    getGames()
      .then((res) => res.json())
      .then((data) => {
        const data1 = JSON.stringify(data);
        getNews()
          .then((res) => res.json())
          .then((newsData) => {
            const data2 = JSON.stringify(newsData);
            const games = JSON.parse(data1);
            const news = JSON.parse(data2);
            res.render("homepage", {
              style: "style.css",
              news,
              games,
              loggedIn: req.session.loggedIn,
            });
          });
      })
      .catch((err) => console.log(err));
  } else {
    async function getNews() {
      let response = await fetch(
        `https://fly.sportsdata.io/v3/nba/scores/json/News`,
        {
          method: "GET",
          headers: {
            "Ocp-Apim-Subscription-Key": process.env.KEY,
          },
        }
      );
      return response;
    }
    async function getGames() {
      date = moment(new Date()).format("YYYY-MM-DD");
      let response = await fetch(
        `https://fly.sportsdata.io/v3/nba/scores/json/GamesByDate/${date}`,
        {
          method: "GET",
          headers: {
            "Ocp-Apim-Subscription-Key": process.env.KEY,
          },
        }
      );
      return response;
    }
    getGames()
      .then((res) => res.json())
      .then((data) => {
        const data1 = JSON.stringify(data);
        getNews()
          .then((res) => res.json())
          .then((newsData) => {
            const data2 = JSON.stringify(newsData);
            const games = JSON.parse(data1);
            const news = JSON.parse(data2);
            res.render("homepage", {
              news,
              games,
              loggedIn: true,
            });
          });
      })
      .catch((err) => console.log(err));
  }
});

router.get("/bet/:id", (req, res) => {
  // date = '2021-APR-04'
  // let id = req.params.id
  // fetch(`https://fly.sportsdata.io/v3/nba/scores/json/GamesByDate/${date}`, {
  //     method: 'GET',
  //     headers: {
  //         'Ocp-Apim-Subscription-Key': process.env.KEY
  //     }
  // })
  //     .then(res => res.json())
  //     .then(games => {
  //         //let game = JSON.stringify(games)
  //         //let game1 = JSON.parse(game)
  //         let singleGame = JSON.stringify(games.filter(data => data.GameID === ('16227')))
  //         console.log(singleGame)
  //         let game = JSON.parse(singleGame)
  //         console.log(game)
  //         res.render('bet', {
  //             game
  //         })
  //     });

  date = "2021-APR-04";
  fetch(`https://fly.sportsdata.io/v3/nba/scores/json/GamesByDate/${date}`, {
    // style: 'style.css',
    method: "GET",
    headers: {
      "Ocp-Apim-Subscription-Key": process.env.KEY,
    },
  })
    .then((res) => res.json())
    .then((games) => {
      res.render(`bet/${req.params.id}`, {
        games,
      });
    });
});

router.get("/login", (req, res) => {
  res.render("login", {
    style: "styleLogin.css",
  });
});

router.get("/signup", (req, res) => {
  res.render("signup", {
    style: "styleLogin.css",
  });
});

module.exports = router;
