const Joi = require("joi");

const exerciseValidationSchema = Joi.object().keys({
  name: Joi.string()
    .required()
    .min(2)
});

module.exports = exerciseValidationSchema;
