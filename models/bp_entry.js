/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
    var Bp = sequelize.define('Bp', {
        user_id: {
            type: DataTypes.STRING(30),
            allowNull: true
        },
        date_time: {
            type: DataTypes.DATE,
            allowNull: false
        },
        systolic: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        diastolic: {
            type: DataTypes.INTEGER,
            allowNull: true
        }
    }, {
        tableName: 'bp_entry'
    });

    Bp.associate = function (models) {
        // We're saying that a Post should belong to an Author
        // A Post can't be created without an Author due to the foreign key constraint
        Bp.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Bp;
};