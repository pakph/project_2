/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  var Bgbp =  sequelize.define('bgbp_entry', {
    user_id: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    date_time: {
      type: DataTypes.DATE,
      allowNull: false
    },
    glucose: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    pressure: {
      type: DataTypes.STRING(30),
      allowNull: true
    }
  }, {
    tableName: 'bgbp_entry'
  });

  Bgbp.associate = function(models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    Bgbp.belongsTo(models.users, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Bgbp;
};
