const Joi = require("joi");

function validateRegistery(registration) {
  const schema = Joi.object()
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

  return Joi.validate(registration, schema);
}

module.exports = validateRegistery;
