"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("Users", {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.UUID,
                defaultValue: Sequelize.literal("gen_random_uuid()"),
            },
            name: {
                type: Sequelize.STRING,
            },
            phone: {
                type: Sequelize.STRING,
                unique: true,
            },
            address: {
                type: Sequelize.STRING,
            },
            email: {
                type: Sequelize.STRING,
                unique: true,
            },
            fbUrl: {
                type: Sequelize.STRING,
            },
            password: {
                type: Sequelize.STRING,
            },
            avatar: {
                type: Sequelize.STRING,
            },
            role: {
                type: Sequelize.ENUM(["ADMIN", "AGENT", "USER"]),
                defaultValue: "USER",
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("Users");
    },
};
