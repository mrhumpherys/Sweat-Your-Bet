const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Game extends Model {}

Game.init({
    GameID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
    },
    Status: {
        type: DataTypes.STRING,
        allowNull: false
    },
    DateTime: {
        type: DataTypes.DATE,
        allowNull: false
    },
    HomeTeam: {
        type: DataTypes.STRING,
        allowNull: false
    },
    HomeTeamID: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    HomeTeamScore: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    AwayTeam: {
        type: DataTypes.STRING,
        allowNull: false
    },
    AwayTeamID: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    AwayTeamScore: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    GameEndDateTime: {
        type: DataTypes.STRING,
        allowNull: true
    },
    HomeTeamWin: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    }
}, {
    sequelize,
    freezeTableName: true,
    underscored: false,
    modelName: 'game',
    
});

module.exports = Game;
