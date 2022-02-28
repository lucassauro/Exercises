const Surgery = (sequelize, DataTypes) => {
  const Surgery = sequelize.define('Surgery', {
    SurgeryId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
      field: 'surgery_id',
    },
    specialty: DataTypes.STRING,
    doctor: DataTypes.STRING,
  }, {
    sequelize, // o sequelize recebido pela função Surgery, na linha 1, é a conexão com o banco de dados.
    modelName: 'Surgery',
    tableName: 'Surgeries',
    underscored: true,
  })

    /// Ao usar junction table, é necessário utilizar os métodos belongsToMany NO MODEL da junction table.
  // Surgery.associate = (models) => {
  //   models.Surgery.belongsToMany(models.Patient, {
  //     through: models.Patient_surgeries,
  //   })
  // }

  return Surgery;
}

module.exports = Surgery;
