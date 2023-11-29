const router = require("express").Router();
const Joi = require("joi");
const ctrls = require("../controllers/user");
const validateDto = require("../middlewares/validation");
const { verifyToken } = require("../middlewares/verifyToken");

router.get("/current", verifyToken, ctrls.getCurrent);

module.exports = router;
