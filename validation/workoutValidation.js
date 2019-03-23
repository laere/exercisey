const Joi = require("joi");

const workoutValidationSchema = Joi.object()
  .keys({
    name: Joi.string()
      .required()
      .min(2)
  })
  .unknown();

module.exports = workoutValidationSchema;
