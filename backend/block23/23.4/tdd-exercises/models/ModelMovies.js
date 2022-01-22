const connection = require('./Connection');

const create = async ({ title, directedBy, releaseYear }) => {
  const [result] = await connection
    .execute(
      "INSERT INTO model_example.movies (title, directed_by, release_year) VALUES (?, ?, ?)",
      [title, directedBy, releaseYear]
    );

  return {
    id: result.insertId,
  };
};

const get = async (id) => {
  const [result] = await connection.execute('SELECT * FROM model_example.movies WHERE id = ?', [id])
  console.log(result);
  return result;
}

module.exports = {
  create,
  get,
};