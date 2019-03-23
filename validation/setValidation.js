const Joi = require("joi");

const setValidationSchema = Joi.object().keys({
  repCount: Joi.string().required(),
  weight: Joi.string().required()
});

module.exports = setValidationSchema;
