let { User, Bet, Game } = require('../models/index');
const fs = require('fs');
const games = JSON.parse(fs.readFileSync('db/_data/game-data.json'));

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

  cleaned = games.map(d => {
    let HomeTeamWin;
    if (d.Status == 'Final') {
      HomeTeamWin = d.HomeTeamScore > d.AwayTeamScore;
    }
    return {
      id: d.GameID,
      Status: d.Status,
      DateTime: d.DateTime,
      HomeTeamID: d.HomeTeamID,
      HomeTeam: d.HomeTeam,
      HomeTeamScore: d.HomeTeamScore,
      HomeTeamWin: HomeTeamWin,
      AwayTeamID: d.AwayTeamID,
      AwayTeam: d.AwayTeam,
      AwayTeamScore: d.AwayTeamScore,
      GameEndDateTime: d.GameEndDateTime,
    };
  });

  Game.bulkCreate(cleaned);

  await Bet.create({
    host_id: 1,
    wager: 20,
    game_id: 16188,
  });

  await Bet.create({
    host_id: 2,
    wager: 35,
    game_id: 16189,
  });

  await Bet.create({
    host_id: 3,
    wager: 40,
    game_id: 16190,
  });
}

module.exports = { seed };
