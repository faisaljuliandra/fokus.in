'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Users.hasMany(models.Goals, { through: 'userGoals', as: 'goals', foreignKey: 'userId' })
      Users.hasMany(models.Category, { through: 'userCategory', as: 'category', foreignKey: 'userId' })
    }
  };
  Users.init({
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    nama: DataTypes.STRING,
    email: DataTypes.STRING,
    jenisKelamin: DataTypes.STRING,
    noTelp: DataTypes.STRING,
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};