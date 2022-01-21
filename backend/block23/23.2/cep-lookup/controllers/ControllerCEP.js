const ServicesCEP = require('../services/ServicesCEP');

const getCep = async (req, res, next) => {
  const { cep } = req.params;
  const get = await ServicesCEP.getCep(cep);
  if(get.error) return next(get.error)
  res.status(200).json(get);
}

const postCep = async (req, res, next) => {
  const cep = req.body;
  const post = await ServicesCEP.postCep(cep);
  if(post.error) return next(post.error)
  res.status(201).json(post)
} 

module.exports = {
  getCep,
  postCep,
};