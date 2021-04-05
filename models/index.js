const User = require('./User');
const Bet = require('./Bet');
const Game = require('./Game');

//! TODO
User.hasMany(Bet,{
  foreignKey: 'host_id'
});
Bet.hasMany(User,{
  foreignKey: "challenger_id"
})
Bet.belongsTo(User,{
  foreignKey: "host_id"
})


module.exports = { User, Bet, Game };
