const Joi = require('joi');

const validate = (req, res, next) => {
  const body = req.body;
  const schema = Joi.object({
    name: Joi.string().not().empty().min(2).required(),
    brand: Joi.string().not().empty().min(2).required(),
  })
  const { error, value } = schema.validate(body);
  if (error) return next(error);
  next();
}

module.exports = {
  validate,
}