const express = require('express');
const routeBooks = require('./RouterBooks');
const routeUsers = require('./RouterUsers');

const errorMiddleware = require('./controllers/ControllerError');

require('dotenv').config()
const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());

app.use('/books', routeBooks)
app.use('/users', routeUsers)

app.use(errorMiddleware);

app.listen(PORT, () => console.log(`Listening to port ${PORT}`));