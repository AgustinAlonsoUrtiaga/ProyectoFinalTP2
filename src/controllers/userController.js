const userService = require('../services/userService');
const sendWelcomeEmail = require('../services/sendEmailService');

exports.register = async (req, res) => {
  try {
    const user = await userService.register(req.body);
    await sendWelcomeEmail(user.email)
    res.status(201).json({ message: 'Usuario registrado con éxito', user });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const { user, token } = await userService.login(email, password);
    res.json({ message: 'Login exitoso', token, user });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};