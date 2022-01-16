const express = require('express');
const bodyParser = require('body-parser');

const { userRouter } = require('./1_userRouter');

const app = express();
app.use(bodyParser.json());


app.use('/user', userRouter);

app.listen(3000, () => {
  console.log('chora.....')
})
