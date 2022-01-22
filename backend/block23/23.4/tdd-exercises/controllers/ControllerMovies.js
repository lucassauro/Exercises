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

module.exports = {
  create,
};