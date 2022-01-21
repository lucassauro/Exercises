const Joi = require('joi');

const validateCEPParams = (req, res, next) => {
  const { cep } = req.params;
  if (!cep || !cep.match(/\d{5}-?\d{3}/)) return next({ code: "invalidData", message: 'CEP inválido' })
  next();
}

const validateCEPBody = (req, res, next) => {
  const { cep } = req.body;
  if (!cep || !cep.match(/\d{5}-?\d{3}/)) return next({ code: "invalidData", message: 'CEP inválido' })
  next();
}

const validateFields = (req, res, next) => {
  const { logradouro, bairro, localidade, uf } = req.body;
  const schema = Joi.object({
    logradouro: Joi.string().not().empty().min(2).max(50).required(),
    bairro: Joi.string().not().empty().min(2).max(50).required(),
    localidade: Joi.string().not().empty().min(2).max(50).required(),
    uf: Joi.string().not().empty().min(2).max(3).required(),
  });
  const { error } = schema.validate({logradouro, bairro, localidade, uf});
  if(error) return next({ code: "invalidData", message: `${error.details[0].message}` } );
  next();
}

module.exports = {
  validateCEPParams,
  validateCEPBody,
  validateFields,
}