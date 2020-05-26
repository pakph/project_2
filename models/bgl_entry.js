/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  var Bgl =  sequelize.define('bgl_entry', {
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
    }
  }, {
    tableName: 'bgl_entry'
  });

  Bgl.associate = function(models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    Bgl.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Bgl;
};
