const connection = require('./connection');

const create = async ({ firstName, lastName, email, password }) => {
  const [create] = await connection.execute('INSERT INTO model_example.users (first_name, last_name, email, password) VALUES (?, ?, ?, ?)', [firstName, lastName, email, password])
  console.log(create.insertId);
  return {
    id: create.insertId,
    firstName,
    lastName,
    email,
    password
  }
}

const getUsers = async (id = 0) => {
  if (id === 0) {
    const [get] = await connection.execute('SELECT * FROM model_example.users')
    return get;
  }
  const [get] = await connection.execute('SELECT * FROM model_example.users WHERE id = ?', [id]) 
  return get;
}

const update = async (id, { firstName, lastName, email, password }) => {
  await connection.execute('UPDATE model_example.users SET first_name = ?, last_name = ?, email = ?, password = ? WHERE id = ?', [firstName, lastName, email, password, id])
  return {
    id,
    firstName,
    lastName,
    email,
  }
}

module.exports = {
  create,
  getUsers,
  update,
}