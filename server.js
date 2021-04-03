const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
// const routes = require('./controllers/');
const { User, Bet } = require('./models/index');
const { test } = require('./test');
const fs = require('fs');
const games = JSON.parse(fs.readFileSync('db/_data/game-data.json'));

const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require('./config/connection');
// const SequelizeStore = require('connect-session-sequelize')(session.Store);

// const sess = {
//   secret: 'Super secret secret',
//   cookie: { maxAge: 5 * 60 * 1000 }, // 5 minutes
//   resave: false,
//   saveUninitialized: true,
//   store: new SequelizeStore({
//     db: sequelize,
//   }),
// };

// app.use(session(sess));

const helpers = require('./utils/helpers');
const { Console } = require('console');
const Game = require('./models/Game');

const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(require('./controllers/'));

// app.listen(PORT, () => console.log(`Now listening at http://localhost:${PORT}`));
sequelize.sync({ force: true }).then(async () => {
  app.listen(PORT, () => console.log(`Now listening at http://localhost:${PORT}`));

  // let game = await Game.create({
  //   status: 'Upcoming',
  //   homeTeam_id: 1,
  //   awayTeam_id: 2,
  // });

  // console.log(game);

  let user = await User.create({
    username: 'kpessa',
    password: 'hello',
    email: 'kpessa@gmail.com',
    balance: 100,
  });

  // let bet = await Bet.create({
  //   host_id: 1,
  //   wager: 20,
  // });

  // console.log(bet);

  cleaned = games.map(d => {
    let HomeTeamWin;
    if (d.Status == 'Final') {
      HomeTeamWin = d.HomeTeamScore > d.AwayTeamScore;
    }
    return {
      GameID: d.GameID,
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

  // Game.bulkCreate(cleaned);

  console.log(cleaned);
});
