const Joi = require("joi");

const registerValidationSchema = Joi.object()
  .keys({
    name: Joi.string()
      .min(2)
      .max(30)
      .required(),
    email: Joi.string()
      .min(2)
      .regex(/^.+@.+\..+$/)
      .email()
      .required(),
    password: Joi.string()
      .min(6)
      .required()
  })
  .unknown();

module.exports = registerValidationSchema;
