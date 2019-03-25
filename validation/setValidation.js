const Joi = require("joi");

function validateSet(set) {
  const schema = Joi.object()
    .keys({
      repCount: Joi.string().required(),
      weight: Joi.string().required()
    })
    .unknown();

  return Joi.validate(set, schema);
}

module.exports = validateSet;
