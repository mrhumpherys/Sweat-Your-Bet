const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Stats extends Model {}

Stats.init({
  wallet: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 100,
    validate: {
      isAlphanumeric: true,
    },
  },
  userWins: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
    validate: {
      isAlphanumeric: true,
    },
  },
  userLosses: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
    validate: {
      isAlphanumeric: true,
    },
  },
  sequelize,
  timestamps: false,
  freezeTableName: true,
  modelName: "user",
});

module.exports = Stats;
