module.exports = (err, _req, res, _next) => {
  const statusByErrorCode = {
    badRequest: 400,
    invalidData: 400,
    notFound: 404,
    alreadyExists: 409,
  };

  const status = statusByErrorCode[err.code] || 500;

  res.status(status).json({ error: { code: err.code, message: err.message } })
}