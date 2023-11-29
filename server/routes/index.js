const auth = require("./auth");
const user = require("./user");
const {
    errorHandler,
    badRequestException,
} = require("../middlewares/errorHandler");

const initRoutes = (app) => {
    app.use("/api/auth", auth);
    app.use("/api/user", user);
    app.use("/", badRequestException);

    app.use(errorHandler);
};

module.exports = initRoutes;
