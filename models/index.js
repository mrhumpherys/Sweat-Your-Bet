const User = require('./User');
const Bet = require('./Bet');
const Game = require('./Game');

//! TODO
Bet.hasOne(Game, {
  foreignKey: 'game_id',
});

module.exports = { User, Bet, Game };
