const router = require('express').Router();
const { User, Bet, Game } = require('../../models');
const fs = require('fs');
const moment = require('moment');
const fetch = require('node-fetch');

router.get('/games', async (req, res) => {
  a = Array(7)
    .fill(0)
    .map((_, i) => i);
  dates = a.map(x => moment().subtract(x, 'days').format('YYYY-MMM-DD'));

  f = async x => {
    let response = await fetch(`https://fly.sportsdata.io/v3/nba/scores/json/GamesByDate/${x}`, {
      method: 'GET',
      headers: {
        'Ocp-Apim-Subscription-Key': process.env.KEY,
      },
    });
    d = await response.json();
    return d;
  };

  d = [...(await f(dates[0])), ...(await f(dates[1])), ...(await f(dates[2])), ...(await f(dates[3])), ...(await f(dates[4])), ...(await f(dates[5])), ...(await f(dates[6]))];

  b = d.map(g => {
    return {
      id: g.GameID,
      date_time: g.DateTime,
      status: g.Status,
      home_team_id: g.HomeTeamID,
      home_team: g.HomeTeam,
      home_team_score: g.HomeTeamScore,
      away_team_id: g.AwayTeamID,
      away_team: g.AwayTeam,
      away_team_score: g.AwayTeamScore,
      home_team_win: g.Status == 'Final' || g.Status == 'F/OT' ? g.HomeTeamScore > g.AwayTeamScore : null,
    };
  });
  // console.log(b);
  // b.forEach()
  b.forEach(async g => {
    let game = await Game.findByPk(g.id);
    if (game)
      Game.update(g, {
        where: {
          id: g.id,
        },
      });
    if (!game) Game.create(g);
  });

  res.json(d);
});

module.exports = router;
