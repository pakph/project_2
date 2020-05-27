/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
    var Med = sequelize.define('Med', {
        med_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        med_name: {
            type: DataTypes.STRING(45),
            allowNull: true
        },
        med_type: {
            type: DataTypes.STRING(45),
            allowNull: true
        },
        dosage: {
            type: DataTypes.STRING(75),
            allowNull: true
        }
    }, {
        tableName: 'medication'
    });
    return Med
};