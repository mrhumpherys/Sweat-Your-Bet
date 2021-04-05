const router = require('express').Router();
const { User, Bet, Game } = require('../../models');

router.get('/bets', async (req, res) => {
  await Bet.create({
    host_id: 4,
    wager: 17,
    game_id: 16191,
    pick_team_id: 3,
  });

  await Bet.create({
    host_id: 11,
    wager: 9,
    game_id: 16230,
    pick_team_id: 13,
  });

  await Bet.create({
    host_id: 8,
    wager: 18,
    game_id: 16235,
    pick_team_id: 3,
  });
  // await Bet.bulkCreate([
  //   {
  //     host_id: 4,
  //     wager: 17,
  //     game_id: 16191,
  //     pick_team_id: 3,
  //   },
  //   {
  //     host_id: 11,
  //     wager: 9,
  //     game_id: 16230,
  //     pick_team_id: 13,
  //   },
  //   {
  //     host_id: 8,
  //     wager: 18,
  //     game_id: 16235,
  //     pick_team_id: 3,
  //   },
  //   {
  //     host_id: 5,
  //     wager: 5,
  //     game_id: 16197,
  //     pick_team_id: 21,
  //   },
  //   {
  //     host_id: 9,
  //     wager: 11,
  //     game_id: 16191,
  //     pick_team_id: 31,
  //   },
  //   {
  //     host_id: 10,
  //     wager: 15,
  //     game_id: 16208,
  //     pick_team_id: 20,
  //   },
  //   {
  //     host_id: 4,
  //     wager: 13,
  //     game_id: 16213,
  //     pick_team_id: 20,
  //   },
  //   {
  //     host_id: 3,
  //     wager: 10,
  //     game_id: 16209,
  //     pick_team_id: 12,
  //   },
  //   {
  //     host_id: 6,
  //     wager: 12,
  //     game_id: 16196,
  //     pick_team_id: 1,
  //   },
  //   {
  //     host_id: 5,
  //     wager: 14,
  //     game_id: 16196,
  //     pick_team_id: 17,
  //   },
  // ]);

  bets = await Bet.findAll();

  res.json(bets);
});

router.get('/users', async (req, res) => {
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

  await User.bulkCreate([
    {
      username: 'lphilo0',
      password: '8HGpgNE8GRZ8',
      email: 'jworviell0@ustream.tv',
      balance: 125,
    },
    {
      username: 'gtritton1',
      password: 'WuXDpAi',
      email: 'lcesaric1@google.ca',
      balance: 353,
    },
    {
      username: 'cstaniland2',
      password: 'EyFJDKeqcO8',
      email: 'nsall2@answers.com',
      balance: 976,
    },
    {
      username: 'htallon3',
      password: 'n7StLeOJ',
      email: 'afluck3@google.com.hk',
      balance: 177,
    },
    {
      username: 'phamlet4',
      password: 'sPzMQvl2',
      email: 'oblaskett4@github.com',
      balance: 845,
    },
    {
      username: 'tirdale5',
      password: '4WX2Asu7i',
      email: 'kmullinger5@opera.com',
      balance: 931,
    },
    {
      username: 'jwytchard6',
      password: 'myLoeew47',
      email: 'lwrightim6@howstuffworks.com',
      balance: 504,
    },
    {
      username: 'slaurenzi7',
      password: '5pBE3iz9T',
      email: 'dkinnen7@jiathis.com',
      balance: 161,
    },
    {
      username: 'mharty8',
      password: 'j3vCzTdCCjS',
      email: 'bbrion8@bing.com',
      balance: 228,
    },
    {
      username: 'iprowse9',
      password: 'soid5rU',
      email: 'jkuscha9@discovery.com',
      balance: 901,
    },
  ]);

  let users = await User.findAll();
  res.json(users);
});

module.exports = router;
