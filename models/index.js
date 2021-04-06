const User = require('./User');
const Bet = require('./Bet');
const Game = require('./Game');

//! ----------------------------
//! |     BET-> GAME           |
//! ----------------------------

Game.hasMany(Bet, {
  foreignKey: 'game_id',
  sourceKey: 'id',
  onDelete: 'CASCADE',
  constraints: false,
});

Bet.belongsTo(Game, {
  foreignKey: 'game_id',
  sourceKey: 'id',
  onDelete: 'CASCADE',
  constraints: false,
});

//! ----------------------------
//! |   USER -> BET  (host_id) |
//! ----------------------------

// User.hasMany(Bet, {
//   foreignKey: 'host_id',
//   sourceKey: 'id',
//   onDelete: 'CASCADE',
// });

// Bet.belongsTo(User, {
//   foreignKey: 'host_id',
//   sourceKey: 'id',
//   onDelete: 'CASCADE',
// });

//! ----------------------------------
//! |   USER -> BET  (challenger_id) |
//! ----------------------------------

// User.hasMany(Bet, {
//   foreignKey: 'challenger_id',
//   sourceKey: 'id',
//   onDelete: 'CASCADE',
//   constraints: false,
// });

// Bet.belongsTo(User, {
//   foreignKey: 'challenger_id',
//   sourceKey: 'id',
//   onDelete: 'CASCADE',
//   constraints: false,
// });


module.exports = { User, Bet, Game };
