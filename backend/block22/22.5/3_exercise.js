const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.get('/posts/:id', (req, res) => {
  const { id } = req.params;
})

app.listen(3000, () => {
  console.log('bom dia!')
})