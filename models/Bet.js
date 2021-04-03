/*
CREATE TABLE Bet (
	id INTEGER AUTO_INCREMENT,
    host_id INTEGER,
    challenger_id INTEGER,
    wager INTEGER,
    host_won BOOLEAN,
    game_id INTEGER,
    pick_team_id INTEGER,
    win BOOLEAN,
    PRIMARY KEY (id),
    FOREIGN KEY(host_id) REFERENCES User(id),
    FOREIGN KEY(challenger_id) REFERENCES User(id),
    FOREIGN KEY(game_id) REFERENCES Game(id),
    FOREIGN KEY(pick_team_id) REFERENCES Team(id)
);

*/
//! TODO

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const User = require('./User');
const Game = require('./Game');

class Bet extends Model {}

Bet.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    host_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      references: {
        model: 'user',
        key: 'id',
      },
    },
    challenger_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      unique: true,
      references: {
        model: 'user',
        key: 'id',
      },
    },
    wager: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    host_won: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: null,
    },
    game_id: {
      type: DataTypes.INTEGER,
      // allowNull: false,
      unique: true,
      references: {
        model: 'game',
        key: 'id',
      },
    },
    // pickTeamID: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    //   unique: true,
    //   references: {
    //     model: 'team',
    //     key: 'id',
    //   },
    // },
    // win: {
    //   type: DataTypes.BOOLEAN,
    //   allowNull: false,
    //   unique: true,
    //   references: {
    //     model: true,
    //   },
    // },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'bet',
  }
);

module.exports = Bet;
