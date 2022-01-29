const ModelCEP = require('../models/ModelCEP');

const getCep = async (cepN) => {
  const get = await ModelCEP.getCep(cepN);
  if (!get || get.erro || get.length < 1 ) return {
    error: { 
      code: "notFound",
      message: "CEP não encontrado"
    }
  }
  return get;
}

const postCep = async (cepBody) => {
  const exists = await ModelCEP.getCep(cepBody.cep)
  if (exists.length > 0) return {
    error: {
      code: 'alreadyExists',
      message: 'CEP já existente',
    }
  }
  const post = await ModelCEP.postCep(cepBody);
  return post;
}

module.exports = {
  getCep,
  postCep,
}