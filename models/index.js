const User = require('./User');
const Bet = require('./Bet');
const Game = require('./Game');
const { sequelize } = require('./User');

//! TODO
User.hasMany(Bet,{
  foreignKey: 'host_id'
});
Bet.belongsToMany(User,{
  foreignKey: "host_id",
  foreignKey: "challenger_id",
  through: "userBets"
});
Game.hasMany(Bet, {
  foreignKey: 'bet_id'
});


module.exports = { User, Bet, Game };
