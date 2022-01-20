const express = require('express');
const router = express.Router();
const { validateUser, validateUserId } = require('./services/validationMiddlewares');
const { createUser, getAllUsers, getUserById, updateUser } = require('./controllers/ControllerUsers')

router.get('/', getAllUsers) 

router.post('/', validateUser, createUser)

router.get('/:id', getUserById)

router.put('/:id', validateUser, validateUserId, updateUser)

module.exports = router;
