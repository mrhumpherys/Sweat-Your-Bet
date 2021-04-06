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
      references: {
        model: 'user',
        key: 'id',
      },
    },
    challenger_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'user',
        key: 'id',
      },
    },
    wager: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true,
    },
    host_won: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: null,
    },
    // game_id: {
    //   type: DataTypes.INTEGER,
    //   allowNull: true,
    //   references: {
    //     model: 'game',
    //     key: 'GameID',
    //   },
    // },
    pick_team_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
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
    underscored: false,
    timestamps: false,
    tableName: 'bet',
    modelName: 'bet',
  }
);

module.exports = Bet;
