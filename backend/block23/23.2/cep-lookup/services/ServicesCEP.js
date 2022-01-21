const ModelCEP = require('../models/ModelCEP');

const getCep = async (cep) => {
  const get = await ModelCEP.getCep(cep);
  if (!get || get.length < 1) return {
    error: { 
      code: "notFound",
      message: "CEP não encontrado"
    }
  }
  return get;
}

const postCep = async (cep) => {
  const exists = await ModelCEP.getCep(cep.cep)
  if (exists.length > 0) return {
    error: {
      code: 'alreadyExists',
      message: 'CEP já existente',
    }
  }
  const post = await ModelCEP.postCep(cep);
  return post;
}

module.exports = {
  getCep,
  postCep,
}