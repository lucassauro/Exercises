const connection = require('./Connection');
const fetchAPI = require('./ModelAPI');


const getCep = async (cepN) => {
  const [get] = await connection.execute('SELECT * FROM ceps WHERE cep = ?', [cepN]);
  if (get.length < 1) {
    const response = await fetchAPI(cepN);
    return postCep({
      bairro: await response.bairro,
      cep: await response.cep,
      localidade: await response.localidade,
      logradouro: await response.logradouro,
      uf: await response.uf,
    })
  }
  return get;
}

const postCep = async ({bairro: bairro, cep: cepN, localidade: localidade, logradouro: logradouro, uf: uf}) => {
  await connection.execute(
    'INSERT INTO ceps(bairro, cep, localidade, logradouro, uf) VALUES (?, ?, ?, ?, ?)',
    [bairro, cepN, localidade, logradouro, uf])
  return {
    cep: cepN,
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