module.exports = (sequelize, DataTypes) => {
  const Usuario = sequelize.define(
    "Usuario",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      nome: {
        type: DataTypes.STRING(150),
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING(150),
        allowNull: false,
        unique: true,
      },
      senha: {
        type: DataTypes.STRING(64),
        allowNull: false,
      },
    },
    {
      tableName: "usuarios",
      timestamps: true,
    }
  );

  return Usuario;
};
