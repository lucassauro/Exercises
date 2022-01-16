const express = require('express');
const bodyParser = require('body-parser');
const { notFound } = require('./3_middlewares');
const rescue = require('express-rescue');


const app = express();
app.use(bodyParser.json());

const routes = require('./3_routes');

app.use('/posts', routes);

app.all('*', rescue(notFound));

app.listen(3000, () => {
  console.log('bom dia!')
})