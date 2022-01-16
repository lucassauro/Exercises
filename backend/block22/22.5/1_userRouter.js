const express = require('express');
const userRouter = express.Router();
const { validateLogin, validateRegister } = require('./1_functions');

userRouter.post('/register', validateRegister)

userRouter.post('/login', validateLogin)

module.exports = {
  userRouter,
}