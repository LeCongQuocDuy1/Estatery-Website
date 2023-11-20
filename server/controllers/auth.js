const asyncHandler = require("express-async-handler");

const register = asyncHandler(async (req, res) => {
    // password, phone, name, role = [user, agent]
    // client = urlencode || formdata -> req.body
    // client = params -> req.query
    // client = api/users/:id -> req.params

    const { password, phone, name, role } = req.body;

    return res.json({
        success: true,
        message: "api oke",
        data: { password, phone, name, role },
    });
});

module.exports = {
    register,
};
