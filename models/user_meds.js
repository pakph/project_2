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

  // UserMeds.associate = function(models) {
  //   // We're saying that a Post should belong to an Author
  //   // A Post can't be created without an Author due to the foreign key constraint
  //   UserMeds.belongsTo(models.User, {
  //     foreignKey: {
  //       allowNull: false
  //     }
  //   });
  // };

  return UserMeds;
};
