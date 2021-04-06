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
