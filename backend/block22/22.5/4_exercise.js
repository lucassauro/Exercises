const express = require('express');
const bodyParser = require('body-parser');
const router = require('./4_routes.js');

const app = express();
app.use(bodyParser.json());


app.use('/teams', router);

app.listen(3000, () => {
  console.log("What do you want? I'm listening")
})