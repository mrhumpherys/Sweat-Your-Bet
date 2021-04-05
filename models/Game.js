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
    date_time: DataTypes.DATE,
    status: DataTypes.STRING,
    home_team_id: DataTypes.INTEGER,
    home_team: DataTypes.STRING,
    home_team_score: DataTypes.INTEGER,
    away_team_id: DataTypes.INTEGER,
    away_team_score: DataTypes.INTEGER,
    home_team_win: DataTypes.BOOLEAN,
  },
  {
    sequelize,
    underscored: true,
    timestamps: false,
    tableName: 'game',
    modelName: 'game',
  }
);

module.exports = Game;
