const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
// const routes = require('./controllers/');
const { User, Bet } = require('./models/index');
const { test } = require('./test');

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

  // let games = [
  //   {
  //     GameID: 16188,
  //     Season: 2021,
  //     SeasonType: 1,
  //     Status: 'Final',
  //     Day: '2021-03-30T00:00:00',
  //     DateTime: '2021-03-30T19:00:00',
  //     AwayTeam: 'CHA',
  //     HomeTeam: 'WAS',
  //     AwayTeamID: 2,
  //     HomeTeamID: 1,
  //     StadiumID: 1,
  //     Channel: 'CSMA',
  //     Attendance: null,
  //     AwayTeamScore: 184,
  //     HomeTeamScore: 168,
  //     Updated: '2021-03-30T21:30:45',
  //     Quarter: null,
  //     TimeRemainingMinutes: null,
  //     TimeRemainingSeconds: null,
  //     PointSpread: 11.7,
  //     OverUnder: 362.3,
  //     AwayTeamMoneyLine: -295,
  //     HomeTeamMoneyLine: 242,
  //     GlobalGameID: 20016188,
  //     GlobalAwayTeamID: 20000002,
  //     GlobalHomeTeamID: 20000001,
  //     PointSpreadAwayTeamMoneyLine: -181,
  //     PointSpreadHomeTeamMoneyLine: -178,
  //     LastPlay: 'Scrambled',
  //     IsClosed: true,
  //     GameEndDateTime: '2021-03-30T21:25:39',
  //     HomeRotationNumber: 810,
  //     AwayRotationNumber: 809,
  //     NeutralVenue: false,
  //     OverPayout: -181,
  //     UnderPayout: -178,
  //     Quarters: [
  //       {
  //         QuarterID: 62016,
  //         GameID: 16188,
  //         Number: 1,
  //         Name: '1',
  //         AwayScore: 52,
  //         HomeScore: 47,
  //       },
  //       {
  //         QuarterID: 62017,
  //         GameID: 16188,
  //         Number: 2,
  //         Name: '2',
  //         AwayScore: 52,
  //         HomeScore: 44,
  //       },
  //       {
  //         QuarterID: 62018,
  //         GameID: 16188,
  //         Number: 3,
  //         Name: '3',
  //         AwayScore: 40,
  //         HomeScore: 40,
  //       },
  //       {
  //         QuarterID: 62019,
  //         GameID: 16188,
  //         Number: 4,
  //         Name: '4',
  //         AwayScore: 40,
  //         HomeScore: 37,
  //       },
  //     ],
  //   },
  //   {
  //     GameID: 16189,
  //     Season: 2021,
  //     SeasonType: 1,
  //     Status: 'Final',
  //     Day: '2021-03-30T00:00:00',
  //     DateTime: '2021-03-30T21:00:00',
  //     AwayTeam: 'PHI',
  //     HomeTeam: 'DEN',
  //     AwayTeamID: 7,
  //     HomeTeamID: 20,
  //     StadiumID: 20,
  //     Channel: 'NBATV',
  //     Attendance: null,
  //     AwayTeamScore: 153,
  //     HomeTeamScore: 168,
  //     Updated: '2021-03-30T23:20:23',
  //     Quarter: null,
  //     TimeRemainingMinutes: null,
  //     TimeRemainingSeconds: null,
  //     PointSpread: -8.1,
  //     OverUnder: 355.1,
  //     AwayTeamMoneyLine: 284,
  //     HomeTeamMoneyLine: -345,
  //     GlobalGameID: 20016189,
  //     GlobalAwayTeamID: 20000007,
  //     GlobalHomeTeamID: 20000020,
  //     PointSpreadAwayTeamMoneyLine: -178,
  //     PointSpreadHomeTeamMoneyLine: -181,
  //     LastPlay: 'Scrambled',
  //     IsClosed: true,
  //     GameEndDateTime: '2021-03-30T23:15:14',
  //     HomeRotationNumber: 813,
  //     AwayRotationNumber: 812,
  //     NeutralVenue: false,
  //     OverPayout: -181,
  //     UnderPayout: -178,
  //     Quarters: [
  //       {
  //         QuarterID: 62020,
  //         GameID: 16189,
  //         Number: 1,
  //         Name: '1',
  //         AwayScore: 36,
  //         HomeScore: 71,
  //       },
  //       {
  //         QuarterID: 62021,
  //         GameID: 16189,
  //         Number: 2,
  //         Name: '2',
  //         AwayScore: 37,
  //         HomeScore: 39,
  //       },
  //       {
  //         QuarterID: 62022,
  //         GameID: 16189,
  //         Number: 3,
  //         Name: '3',
  //         AwayScore: 42,
  //         HomeScore: 32,
  //       },
  //       {
  //         QuarterID: 62023,
  //         GameID: 16189,
  //         Number: 4,
  //         Name: '4',
  //         AwayScore: 39,
  //         HomeScore: 26,
  //       },
  //     ],
  //   },
  //   {
  //     GameID: 16190,
  //     Season: 2021,
  //     SeasonType: 1,
  //     Status: 'InProgress',
  //     Day: '2021-03-30T00:00:00',
  //     DateTime: '2021-03-30T22:00:00',
  //     AwayTeam: 'ORL',
  //     HomeTeam: 'LAC',
  //     AwayTeamID: 5,
  //     HomeTeamID: 28,
  //     StadiumID: 27,
  //     Channel: 'PRIME',
  //     Attendance: null,
  //     AwayTeamScore: 147,
  //     HomeTeamScore: 150,
  //     Updated: '2021-03-31T00:12:24',
  //     Quarter: '4',
  //     TimeRemainingMinutes: 1,
  //     TimeRemainingSeconds: 46,
  //     PointSpread: -17.8,
  //     OverUnder: 348.6,
  //     AwayTeamMoneyLine: 896,
  //     HomeTeamMoneyLine: -1315,
  //     GlobalGameID: 20016190,
  //     GlobalAwayTeamID: 20000005,
  //     GlobalHomeTeamID: 20000028,
  //     PointSpreadAwayTeamMoneyLine: -178,
  //     PointSpreadHomeTeamMoneyLine: -178,
  //     LastPlay: 'Scrambled',
  //     IsClosed: false,
  //     GameEndDateTime: null,
  //     HomeRotationNumber: 820,
  //     AwayRotationNumber: 818,
  //     NeutralVenue: false,
  //     OverPayout: -178,
  //     UnderPayout: -181,
  //     Quarters: [
  //       {
  //         QuarterID: 62024,
  //         GameID: 16190,
  //         Number: 1,
  //         Name: '1',
  //         AwayScore: 21,
  //         HomeScore: 42,
  //       },
  //       {
  //         QuarterID: 62026,
  //         GameID: 16190,
  //         Number: 2,
  //         Name: '2',
  //         AwayScore: 39,
  //         HomeScore: 40,
  //       },
  //       {
  //         QuarterID: 62027,
  //         GameID: 16190,
  //         Number: 3,
  //         Name: '3',
  //         AwayScore: 53,
  //         HomeScore: 36,
  //       },
  //       {
  //         QuarterID: 62028,
  //         GameID: 16190,
  //         Number: 4,
  //         Name: '4',
  //         AwayScore: 34,
  //         HomeScore: 32,
  //       },
  //     ],
  //   },
  //   {
  //     GameID: 16191,
  //     Season: 2021,
  //     SeasonType: 1,
  //     Status: 'InProgress',
  //     Day: '2021-03-30T00:00:00',
  //     DateTime: '2021-03-30T22:00:00',
  //     AwayTeam: 'ATL',
  //     HomeTeam: 'PHO',
  //     AwayTeamID: 3,
  //     HomeTeamID: 29,
  //     StadiumID: 28,
  //     Channel: 'FSAZ',
  //     Attendance: null,
  //     AwayTeamScore: 174,
  //     HomeTeamScore: 179,
  //     Updated: '2021-03-31T00:12:11',
  //     Quarter: '4',
  //     TimeRemainingMinutes: 0,
  //     TimeRemainingSeconds: 48,
  //     PointSpread: -9.7,
  //     OverUnder: 357.5,
  //     AwayTeamMoneyLine: 292,
  //     HomeTeamMoneyLine: -362,
  //     GlobalGameID: 20016191,
  //     GlobalAwayTeamID: 20000003,
  //     GlobalHomeTeamID: 20000029,
  //     PointSpreadAwayTeamMoneyLine: -184,
  //     PointSpreadHomeTeamMoneyLine: -174,
  //     LastPlay: 'Scrambled',
  //     IsClosed: false,
  //     GameEndDateTime: null,
  //     HomeRotationNumber: 817,
  //     AwayRotationNumber: 815,
  //     NeutralVenue: false,
  //     OverPayout: -181,
  //     UnderPayout: -176,
  //     Quarters: [
  //       {
  //         QuarterID: 62025,
  //         GameID: 16191,
  //         Number: 1,
  //         Name: '1',
  //         AwayScore: 44,
  //         HomeScore: 48,
  //       },
  //       {
  //         QuarterID: 62029,
  //         GameID: 16191,
  //         Number: 2,
  //         Name: '2',
  //         AwayScore: 40,
  //         HomeScore: 55,
  //       },
  //       {
  //         QuarterID: 62030,
  //         GameID: 16191,
  //         Number: 3,
  //         Name: '3',
  //         AwayScore: 53,
  //         HomeScore: 40,
  //       },
  //       {
  //         QuarterID: 62031,
  //         GameID: 16191,
  //         Number: 4,
  //         Name: '4',
  //         AwayScore: 37,
  //         HomeScore: 36,
  //       },
  //     ],
  //   },
  // ];

  // cleaned = games.map(g => {
  //   GameID: g.GameID;
  // });

  // console.log(cleaned);
});
