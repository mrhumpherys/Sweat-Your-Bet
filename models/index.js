const User = require('./User');
const Bet = require('./Bet');
const Game = require('./Game');

<<<<<<< HEAD
//! ----------------------------
//! |     BET-> GAME           |
//! ----------------------------

Game.hasMany(Bet, {
  foreignKey: 'game_id',
  sourceKey: 'id',
  onDelete: 'CASCADE',
  constraints: false,
});
Bet.hasMany(User, {
  foreignKey: 'bet_id',
});
=======
//! TODO
User.hasMany(Bet,{
  foreignKey: 'bet_id'
});
Bet.hasMany(User,{
  foreignKey: "bet_id"
})
Bet.belongsTo(User,{
  foreignKey: "host_id"
})
>>>>>>> 29394cf0c4a39d4a6954ed956fb9dfb3d5f92167

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
