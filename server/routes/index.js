const auth = require("./auth");
const {
    errorHandler,
    badRequestException,
} = require("../middlewares/errorHandler");

const initRoutes = (app) => {
    app.use("/api/auth", auth);
    app.use("/", badRequestException);

    app.use(errorHandler);
};

module.exports = initRoutes;
