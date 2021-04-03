/*

CREATE TABLE Game (
	id INTEGER NOT_NULL,
    time INTEGER,
    status VARCHAR(30),
    team1_id INTEGER,
    team2_id INTEGER,
    result VARCHAR(30),
    PRIMARY KEY (id),
    FOREIGN KEY(team1_id) REFERENCES Team(id),
    FOREIGN KEY(team2_id) REFERENCES Team(id)
);
*/
//! TODO

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Game extends Model {}

Game.init(
  {
    GameID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    DateTime: {
      type: DataTypes.DATE,
      // allowNull: false,
    },
    // status: {
    //   type: DataTypes.STRING,
    //   defaultValue: 'Upcoming',
    //   // allowNull: false,
    // },
    HomeTeamID: {
      type: DataTypes.INTEGER,
      // allowNull: false,
      // references: {
      //   model: 'team',
      //   key: 'TeamID',
      // },
    },
    AwayTeamID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      // references: {
      //   model: 'team',
      //   key: 'TeamID',
      // },
    },
    AwayTeamScore: {
      type: DataTypes.INTEGER,
      // allowNull: false,
      // defaultValue: 0,
    },
    HomeTeamScore: {
      type: DataTypes.INTEGER,
      // allowNull: false,
      // defaultValue: 0,
    },
    HomeTeamWin: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: null,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'game',
  }
);

module.exports = Game;
