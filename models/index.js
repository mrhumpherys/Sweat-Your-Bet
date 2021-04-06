const User = require('./User');
const Bet = require('./Bet');
const Game = require('./Game');

//! ----------------------------
//! |     BET-> GAME           |
//! ----------------------------

// User.hasMany(Bet, {
//   foreignKey: 'host_id',
//   foreignKey: 'challenger_id',
//   onDelete: 'CASCADE'
// });
// Bet.belongsToMany(User, {
//   foreignKey: 'host_id',
//   foreignKey: 'challenger_id',
//   through: 'userBet'
// });
// Game.hasMany(Bet, {
//   foreignKey: 'game_id',
//   onDelete: 'CASCADE',
//   constraints: false,
// });

// Bet.belongsTo(Game, {
//   foreignKey: 'game_id',
//   onDelete: 'CASCADE',
//   constraints: false,
// });

// ! ----------------------------
// ! |   USER -> BET  (host_id) |
// ! ----------------------------

User.hasMany(Bet, {
  foreignKey: 'host_id',
  foreignKey: 'challenger_id',
  sourceKey: 'id',
  onDelete: 'CASCADE',
});

Bet.belongsToMany(User, {
  foreignKey: 'host_id',
  foreignKey: 'challenger_id',
  sourceKey: 'id',
  onDelete: 'CASCADE',
  through: 'userBet'
});

// ! ----------------------------------
// ! |   USER -> BET  (challenger_id) |
// ! ----------------------------------

User.hasMany(Bet, {
  foreignKey: 'challenger_id',
  foreignKey: 'host_id',
  sourceKey: 'id',
  onDelete: 'CASCADE',
  constraints: false,
});

Bet.belongsToMany(User, {
  foreignKey: 'challenger_id',
  foreignKey: 'host_id',
  sourceKey: 'id',
  onDelete: 'CASCADE',
  constraints: false,
  through: 'userBet'
});

module.exports = { User, Bet, Game };
