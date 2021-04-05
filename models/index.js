const User = require('./User');
const Bet = require('./Bet');
const Game = require('./Game');

Game.hasMany(Bet, {
  foreignKey: 'game_id',
  sourceKey: 'id',
});

Bet.belongsTo(Game, {
  foreignKey: 'game_id',
  sourceKey: 'id',
});

module.exports = { User, Bet, Game };
