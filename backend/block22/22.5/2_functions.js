const { response } = require('express');
const fetch = require('node-fetch');

async function fetchCoin() {
  const link = 'https://api.coindesk.com/v1/bpi/currentprice/BTC.json);'
  const response = await fetch(link);
  const json = await response.json();
  console.log(json)
  return json;
} 

function validateToken(req, res, next) {
  console.log('passou aqui 1')
  return (req.headers.authorization.match(/\w{1,12}/i))
  ? next()
  : res.status(401).json({ message: 'Invalid Token'})
}


module.exports = {
  validateToken,
  fetchCoin,
}