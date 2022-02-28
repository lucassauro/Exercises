const Patient_surgeries = (sequelize, DataTypes) => {
  const Patient_surgeries = sequelize.define('Patient_surgeries', {}, {
    sequelize, // o sequelize recebido pela função Surgery, na linha 1, é a conexão com o banco de dados.
    modelName: 'Patient_surgeries',
    tableName: 'Patient_surgeries',
    underscored: true,
    timestamps: false,
  })

  Patient_surgeries.associate = (models) => {
    models.Patient.belongsToMany(models.Surgery, {
      through: models.Patient_surgeries,
      foreignKey: 'patient_id',
      otherKey: 'surgery_id'
    })
    models.Surgery.belongsToMany(models.Patient, {
      through: models.Patient_surgeries,
      foreignKey: 'surgery_id',
      otherKey: 'patient_id'
    })
  }

  return Patient_surgeries;
}

module.exports = Patient_surgeries;
