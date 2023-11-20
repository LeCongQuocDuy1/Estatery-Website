const router = require("express").Router();
const Joi = require("joi");
const ctrl = require("../controllers/auth");
const validateDto = require("../middlewares/validation");
const { stringReq, numberReq } = require("../middlewares/joiSchema");

router.post(
    "/register",
    validateDto(
        Joi.object({ password: stringReq, name: stringReq, phone: numberReq })
    ),
    ctrl.register
);

module.exports = router;
