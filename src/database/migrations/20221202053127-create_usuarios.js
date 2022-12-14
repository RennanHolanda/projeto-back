'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(
      'usuarios',
      {
        id: {
          type: Sequelize.DataTypes.INTEGER,
          autoIncrement: true,
          allowNull: false,
          primaryKey: true
        },
        nome: {
          type: Sequelize.DataTypes.STRING(150),
          allowNull: false
        },
        email: {
          type: Sequelize.DataTypes.STRING(150),
          allowNull: false,
          unique: true
        },
        senha:{
          type: Sequelize.DataTypes.STRING(64),
          allowNull: false
        },
        createdAt: Sequelize.DataTypes.DATE,
        updatedAt: Sequelize.DataTypes.DATE,
        deletedAt: Sequelize.DataTypes.DATE
      }
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('usuarios');
  }
};