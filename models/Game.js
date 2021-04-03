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
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    DateTime: {
      type: DataTypes.DATE,
      defaultValue: new Date(),
      // allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      defaultValue: 'Upcoming',
      // allowNull: false,
    },
    homeTeam_id: {
      type: DataTypes.INTEGER,
      // allowNull: false,
      // references: {
      //   model: 'team',
      //   key: 'TeamID',
      // },
    },
    awayTeam_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      // references: {
      //   model: 'team',
      //   key: 'TeamID',
      // },
    },
    AwayTeamScore: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    HomeTeamScore: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
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
    modelName: 'game',
  }
);

module.exports = Game;
