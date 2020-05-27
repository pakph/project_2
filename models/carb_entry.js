/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  var Carb = sequelize.define('Carb', {
    user_id: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    date_time: {
      type: DataTypes.DATE,
      allowNull: false
    },
    carb_amount: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'carb_entry'
  });

  Carb.associate = function(models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    Carb.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Carb;
};
