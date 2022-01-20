const UserModels = require('../models/ModelUsers');

const getAllUsers = () => UserModels.getUsers();


const createUser = (user) => UserModels.createUser(user);


const getUserById = (id) => UserModels.getUsers(id);


const updateUser = (id, body) => UserModels.updateUser(id, body);

module.exports = {
  getAllUsers,
  createUser,
  getUserById,
  updateUser
}