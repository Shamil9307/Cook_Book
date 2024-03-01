'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Recipe}) {
      this.belongsToMany(Recipe, {through: 'Favorite', foreignKey: 'userId'})
    }
  }
  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    hashPass: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};