module.exports = (err, req, res, next) => {
  // Construímos, então, um mapa que conecta um erro de domínio a um status HTTP.
  const statusByErrorCode = {
    notFound: 404, // Erros do tipo `notFound` retornam status 404 Not Found
    alreadyExists: 409, // Erros do tipo `alreadyExists` retornam status 409 Conflict
    badRequest: 400,
    // Podemos adicionar quantos códigos novos desejarmos
  };
  console.log('middleware de erro rodou');
  // Buscamos o status adequado para o erro que estamos tratando.
  // Caso não haja um status para esse código, assumimos que é
  // um erro desconhecido e utilizamos o status 500 Internal Server Error
  const status = statusByErrorCode[err.code] || 500;
  // Por último, retornamos o status e a mensagem de erro para o client
  res.status(status).json({ error: { message: err.message } });
}