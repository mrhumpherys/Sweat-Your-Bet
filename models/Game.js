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
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    DateTime: DataTypes.DATE,
    Status: DataTypes.STRING,
    HomeTeamID: DataTypes.INTEGER,
    HomeTeam: DataTypes.STRING,
    AwayTeamID: DataTypes.INTEGER,
    AwayTeamScore: DataTypes.INTEGER,
    HomeTeamScore: DataTypes.INTEGER,
    HomeTeamWin: DataTypes.BOOLEAN,
  },
  {
    sequelize,
    freezeTableName: true,
    modelName: 'game',
  }
);

module.exports = Game;
