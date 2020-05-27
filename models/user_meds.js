module.exports = function(sequelize, DataTypes) {
  var UserMeds = sequelize.define('UserMeds', {
    user_id: {
      type: DataTypes.STRING,
      allowNull: true
    },
    med_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dosage: {
      type: DataTypes.STRING,
      allowNull: true
    },
    no_of_tablets: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    frequency: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'user_meds'
  });
  return UserMeds;
};
