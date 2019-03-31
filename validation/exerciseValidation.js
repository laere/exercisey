const Joi = require("joi");

function validateExercise(workout) {
  const schema = Joi.object()
    .keys({
      name: Joi.string()
        .required()
        .min(2)
    })
    .unknown();

  return Joi.validate(workout, schema);
}

module.exports = validateExercise;
