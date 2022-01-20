const ServiceUsers = require('../services/ServiceUsers');

const getAllUsers = async (_req, res) => {
  const getAll = await ServiceUsers.getAllUsers();
  res.status(200).json(getAll);
}

const createUser = async (req, res) => {
  const user = req.body;
  const create = await ServiceUsers.createUser(user);
  res.status(201).json(create);
}

const getUserById = async (req, res) => {
  const { id } = req.params;
  const getAll = await ServiceUsers.getUserById(id);
  if (!getAll || getAll.length < 1) return res.status(404).json({ error: true, message: "Usuário não encontrado." })
  res.status(200).json(getAll);
}

const updateUser = async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const update = await ServiceUsers.updateUser(id, body);
  res.status(200).json(update);
}

module.exports = {
  getAllUsers,
  createUser,
  getUserById,
  updateUser,
}