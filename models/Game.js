const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Game extends Model {}

Game.init({
    game_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false
    },
    date_time: {
        type: DataTypes.DATE,
        allowNull: false
    },
    hometeam_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    hometeam: {
        type: DataTypes.STRING,
        allowNull: false
    },
    awayteam_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    away_team_score: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    home_team_score: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    }
}, {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'game',
    
});

module.exports = Game;
