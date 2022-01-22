const ServiceMovies = require('../services/ServiceMovies');

const create = async (req, res) => {
  const { title, directedBy, releaseYear } = req.body;

  const movie = await ServiceMovies
    .create({ title, directedBy, releaseYear });

  if (!movie) {
    return res
      .status(400)
      .send('Dados inválidos');
   }

  res
    .status(201)
    .send('Filme criado com sucesso!');
};

const get = async (req, res) => {
  const { id } = req.params;
  const result = await ServiceMovies.get(id);
  if (result.error && result.error.code === 'notFound') return res.status(404).send(result.error.message);
  if (result.error && result.error.code === 'badRequest') return res.status(404).send(result.error.message);
  res.status(200).send(result);
}

module.exports = {
  create,
  get,
};