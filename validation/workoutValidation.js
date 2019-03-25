const Joi = require("joi");

function validateWorkout(workout) {
  const schema = Joi.object()
    .keys({
      name: Joi.string()
        .required()
        .min(2)
    })
    .unknown();

  return Joi.validate(workout, schema);
}

module.exports = validateWorkout;
