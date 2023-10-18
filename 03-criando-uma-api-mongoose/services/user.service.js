const bcrypt = require('bcrypt');
const User = require('../models/User');

const createUser = async (user) => {
  try {
    const { name, email, password } = user;
    const hashedPassword = await bcrypt.hash(password, 10);
  
    const userCreated = await User.create({ name, email, password: hashedPassword });
  
    return userCreated;
  } catch (error) {
    throw new Error(`Erro ao criar usuário ${error.message}`);
  }
};

module.exports = {
  createUser,
};