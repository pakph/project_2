module.exports = function(sequelize, DataTypes) {
    var UserId = sequelize.define("user_id", {
        first_name: DataTypes.STRING,
        last_name: DataTypes.STRING,
        user_id: DataTypes.STRING
    });
    return UserId;
};