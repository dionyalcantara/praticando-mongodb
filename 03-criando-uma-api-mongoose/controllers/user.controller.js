const { userService } = require('../services');

const createUser = async (req, res) => {
  const { body } = req;
  try {
    const user = await userService.createUser(body);
    res.status(201).send(user);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

module.exports = {
  createUser,
};