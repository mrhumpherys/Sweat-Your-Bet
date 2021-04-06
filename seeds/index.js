const moment = require('moment');
const fetch = require('node-fetch');
let { User, Bet, Game } = require('../models/index');
// const fs = require('fs');
// const games = JSON.parse(fs.readFileSync('db/_data/game-data.json'));

async function seed() {
  await User.create({
    username: 'kurtser',
    password: 'hello',
    email: 'kpessa@gmail.com',
    balance: 100,
  });
  await User.create({
    username: 'cody',
    password: 'hello',
    email: 'email1@gmail.com',
    balance: 100,
  });
  await User.create({
    username: 'julius',
    password: 'hello',
    email: 'email2@gmail.com',
    balance: 100,
  });
  await User.create({
    username: 'anthony',
    password: 'hello',
    email: 'email3@gmail.com',
    balance: 100,
  });

  // console.log(bet);

  date = moment(new Date()).format('YYYY-MM-DD');
  response = await fetch(`https://fly.sportsdata.io/v3/nba/scores/json/GamesByDate/${date}`, {
    method: 'GET',
    headers: {
      'Ocp-Apim-Subscription-Key': process.env.KEY,
    },
  });

  games = await response.json();

  console.log(games);

  cleaned = games.map(d => {
    let HomeTeamWin;
    if (d.Status == 'Final') {
      HomeTeamWin = d.HomeTeamScore > d.AwayTeamScore;
    }
    return {
      id: d.GameID,
      status: d.Status,
      date_time: d.DateTime,
      home_team_id: d.HomeTeamID,
      home_team: d.HomeTeam,
      home_team_score: d.HomeTeamScore,
      home_team_win: HomeTeamWin,
      away_team_id: d.AwayTeamID,
      away_team: d.AwayTeam,
      away_team_score: d.AwayTeamScore,
      game_end_date_time: d.GameEndDateTime,
    };
  });

  Game.bulkCreate(cleaned);

  await Bet.create({
    host_id: 1,
    wager: 20,
    game_id: 16240,
    pick_team_id: 1,
  });

  await Bet.create({
    host_id: 2,
    wager: 35,
    game_id: 16238,
    pick_team_id: 2,
  });

  await Bet.create({
    host_id: 3,
    wager: 40,
    game_id: 16236,
    pick_team_id: 4,
  });
}

module.exports = { seed };
