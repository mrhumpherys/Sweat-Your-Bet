const User = require('./User');
const Bet = require('./Bet');
const Game = require('./Game');

//! TODO
<<<<<<< HEAD
const User = require('./User');

module.exports = { User };
// module.exports = { User, Post, Comment };
=======
Bet.hasOne(Game, {
  foreignKey: 'game_id',
});

module.exports = { User, Bet, Game };
>>>>>>> feature/models
