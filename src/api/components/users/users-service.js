const usersRepository = require('./users-repository');

async function getUsers() {
  return usersRepository.getUsers();
}

async function getUser(id) {
  return usersRepository.getUser(id);
}

async function emailExists(email) {
  const user = await usersRepository.getUserByEmail(email);
  return !!user; // Return true if user exists, false otherwise
}

async function createUser(email, password, fullName) {
  return usersRepository.createUser(email, password, fullName);
}

async function updateUser(id, email, fullName) {
  return usersRepository.updateUser(id, email, fullName);
}

async function deleteUser(id) {
  return usersRepository.deleteUser(id);
}
async function updateUserPassword(id, hashedPassword) {
  return await db('users').where({ id }).update({ password: hashedPassword });
}

async function getUserByEmail(email) {
  return database.users.findOne({ where: { email } }); // Adjust based on your ORM (e.g., Sequelize)
}


module.exports = {
  getUsers,
  getUser,
  emailExists,
  createUser,
  updateUser,
  deleteUser,
  getUserByEmail
};
