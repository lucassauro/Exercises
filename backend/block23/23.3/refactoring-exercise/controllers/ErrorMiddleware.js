module.exports = (err, req, res, next) => {

  if (err.isJoi) return res.status(400).json({ error: { message: err.details[0].message } });

  const statusByErrorCode = {
    badRequest: 400,
    invalidData: 400,
    notFound: 404,
    alreadyExists: 409,
  }

  const status = statusByErrorCode[err.code] || 500;

  res.status(status).json({ error: { code: err.code, message: err.message }})


}