const User = require('./User');
const Bet = require('./Bet');
const Game = require('./Game');

//! TODO
User.hasMany(Bet,{
  foreignKey: 'user_id'
});
Bet.hasMany(User,{
  foreignKey: "bet_id"
})


module.exports = { User, Bet, Game };
