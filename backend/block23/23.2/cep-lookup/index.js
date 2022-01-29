const express = require('express');
const { validateCEPParams, validateCEPBody, validateFields } = require('./controllers/Middlewares');
const { getCep, postCep } = require('./controllers/ControllerCEP');
const errorMiddleware = require('./controllers/MiddlewareError')

const app = express();

app.use(express.json());

app.get('/ping', (_req, res) => {
  res.status(200).json({ message: 'pong!' });
})

app.get('/cep/:cep', validateCEPParams, getCep);

app.post('/cep', validateCEPBody, validateFields, postCep);

app.use(errorMiddleware);

app.listen(3000, () => console.log('Chora....'))