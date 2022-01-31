const Plan = (sequelize, DataTypes) => {
  const Plan = sequelize.define('Plan', {
    planId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
      field: 'plan_id',
    },
    coverage: DataTypes.STRING,
    price: DataTypes.DOUBLE
  }, {
    sequelize, // o sequelize recebido pela função plan, na linha 1, é a conexão com o banco de dados.
    modelName: 'Plan',
    tableName: 'Plans',
    underscored: true,
  })

  Plan.associate = (models) => {
    models.Plan.hasMany(models.Patient, {
      foreignKey: {
        name: 'planId',
        as: 'patients',
      }
    })
  }

  return Plan;
}

module.exports = Plan;
