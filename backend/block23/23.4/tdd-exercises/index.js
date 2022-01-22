const express = require('express');
const bodyParser = require('body-parser');

const ControllerMovies = require('./controllers/ControllerMovies');

const app = express();

app.use(bodyParser.json());

app.post('/movies', ControllerMovies.create);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});