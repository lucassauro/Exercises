const connection = require('./Connection');

const getCep = async (cep) => {
  const [get] = await connection.execute('SELECT * FROM ceps WHERE cep = ?', [cep]);
  return get;
}

const postCep = async ({bairro, cep, localidade, logradouro, uf}) => {
  await connection.execute(
    'INSERT INTO ceps(bairro, cep, localidade, logradouro, uf) VALUES (?, ?, ?, ?, ?)',
    [bairro, cep, localidade, logradouro, uf])
  return {
    cep,
    logradouro,
    bairro,
    localidade,
    uf,
  };
}

module.exports = {
  getCep,
  postCep,
};