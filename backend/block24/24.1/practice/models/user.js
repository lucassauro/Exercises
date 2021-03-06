const User = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    fullName: DataTypes.STRING,
		//linha adicionada.
    email: DataTypes.STRING,
    phone_num: DataTypes.STRING,
  }, {
    underscored: true,
    tableName: 'Users',
  });

  return User;
};

module.exports = User;