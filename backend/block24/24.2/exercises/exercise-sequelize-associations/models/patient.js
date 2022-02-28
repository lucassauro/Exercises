const Patient = (sequelize, DataTypes) => {
  const Patient = sequelize.define('Patient', {
    patientId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
      field: 'patient_id'
    },
    fullName: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'fullname'
    },
    // A declaração da Foreign Key é opcional no model. A função associate já define as FK automaticamente.
    planId: {
      foreignKey: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'plan_id',
    }
  }, {
    sequelize,
    modelName: 'Patient',
    tableName: 'Patients',
    underscored: true,
  })
  Patient.associate = (models) => {
    models.Patient.belongsTo(models.Plan, {
      foreignKey: {
        name: 'planId',
        as: 'plans',
      }
    })
    /// Ao usar junction table, é necessário utilizar os métodos belongsToMany NO MODEL da junction table.
    // models.Patient.belongsToMany(models.Surgery, {
    //   through: models.Patient_surgeries,
    // })
  }

  return Patient;
}

module.exports = Patient;
