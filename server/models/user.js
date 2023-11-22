"use strict";
const { Model } = require("sequelize");
const brcypt = require("bcrypt");

module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    User.init(
        {
            name: DataTypes.STRING,
            phone: DataTypes.STRING,
            address: DataTypes.STRING,
            email: DataTypes.STRING,
            fbUrl: DataTypes.STRING,
            password: {
                type: DataTypes.STRING,
                set(value) {
                    const salt = brcypt.genSaltSync(10);
                    this.setDataValue("password", brcypt.hashSync(value, salt));
                },
            },
            avatar: DataTypes.STRING,
            role: {
                type: DataTypes.ENUM,
                values: ["ADMIN", "AGENT", "USER"],
            },
        },
        {
            sequelize,
            modelName: "User",
        }
    );
    return User;
};
