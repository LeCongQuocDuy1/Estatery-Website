const asyncHandler = require("express-async-handler");
const db = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const getCurrent = asyncHandler(async (req, res) => {
    const { uid } = req.user;
    const response = await db.User.findByPk(uid, {
        attributes: {
            exclude: ["password"],
        },
    });
    return res.json({
        success: Boolean(response),
        message: response
            ? "Get current user success"
            : "Cannot get current user!",
        currentUser: response,
    });
});

module.exports = {
    getCurrent,
};
