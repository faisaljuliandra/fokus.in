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
      Users.belongsToMany(models.Goals, { through: 'userGoals', as: 'goals', foreignKey: 'id' })
      Users.belongsToMany(models.Categories, { through: 'userCategory', as: 'category', foreignKey: 'id' })
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