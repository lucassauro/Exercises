const ModelMovies = require('../models/ModelMovies');

const isValid = (title, directedBy, releaseYear) => {
  if (!title || typeof title !== 'string') return false;
  if (!releaseYear || typeof releaseYear !== 'number') return false;
  if (!directedBy || typeof directedBy !== 'string') return false;

  return true;
};

const create = async ({ title, directedBy, releaseYear }) => {
  const isMovieValid = isValid(title, directedBy, releaseYear);

  if (!isMovieValid) return false;

  const { id } = await ModelMovies
    .create({ title, directedBy, releaseYear });

  return {
    id,
  };
};

const get = async (id) => {
  const result = await ModelMovies.get(id)
  if (typeof id !== 'number') return { error: { code: 'badRequest', message: 'id deve ser número'} }
  if (!result || result.length < 1) return { error: { code: 'notFound', message: 'Id não encontrado' } }
  return result;
}

module.exports = {
  create,
  get,
};