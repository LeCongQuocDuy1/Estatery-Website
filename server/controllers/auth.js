const asyncHandler = require("express-async-handler");
const db = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { throwErrorWithStatus } = require("../middlewares/errorHandler");

const signUp = asyncHandler(async (req, res) => {
    // password, phone, name, role = [user, agent]
    // client = urlencode || formdata -> req.body
    // client = params -> req.query
    // client = api/users/:id -> req.params

    const { phone } = req.body;

    const response = await db.User.findOrCreate({
        where: { phone: phone },
        defaults: req.body,
    });

    return res.json({
        success: response[1],
        message: response[1]
            ? "Your account has been created."
            : "Phone is already in use by another account!",
    });
});

const signIn = asyncHandler(async (req, res, next) => {
    const { phone, password } = req.body;

    const user = await db.User.findOne({
        where: { phone },
    });

    if (!user) {
        return throwErrorWithStatus(403, "User not found!", res, next);
    }

    const isMatchingPassword = bcrypt.compareSync(password, user.password);

    if (!isMatchingPassword) {
        return throwErrorWithStatus(401, "Password is wrong!", res, next);
    }

    const token = jwt.sign(
        { uid: user.id, role: user.role },
        process.env.SECRET_KEY_JWT,
        { expiresIn: "7d" }
    );

    return res.json({
        success: true,
        message: "Sign in successfully!",
        accessToken: token,
    });
});

module.exports = {
    signUp,
    signIn,
};
