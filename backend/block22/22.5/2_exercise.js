const express = require('express');
const bodyParser = require('body-parser');

const { validateToken, fetchCoin } = require('./2_functions.js');

const app = express();
app.use(bodyParser.json());


app.get('/btc/price', validateToken, async (_req, res) => {
  const response = await fetchCoin();
  res.status(200).json(response);

})

app.listen(3000, () => {
  console.log('vai se tratar garotaaaaa......')
})