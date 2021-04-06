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
!TODO

const {
    Model,
    DataTypes
} = require('sequelize');
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
    HomeTeamID: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    HomeTeam: {
        type: DataTypes.STRING,
        allowNull: false
    },
    AwayTeamID: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    AwayTeamScore: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    HomeTeamScore: {
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