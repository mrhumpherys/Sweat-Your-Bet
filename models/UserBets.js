const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const User = require('./User');
const Game = require('./Game');

class UserBets extends Model { }

UserBets.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        host: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references:{
                model : 'user',
                key: 'id',
            }
        },
        challenger: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references:{
                model : 'user',
                key: 'id',
            }
        }
        
    },
    {
        sequelize,
        underscored: false,
        timestamps: false,
        tableName: 'user_bets',
        modelName: 'user_bets',
    }
);

module.exports = UserBets;