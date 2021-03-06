const authService = require('../services/authServices');
const { unauthorized, serverError } = require('../utils/library/statusCode');

module.exports = (req, res, next) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      return res.status(unauthorized).json({ error: { message: 'Token not found' } });
    }

    const user = authService.verifyToken(authorization);

    if (!user) {
      return res.status(unauthorized).json({ error: { message: 'Expired or invalid token' } });
    }

    req.user = user;
    next();
  } catch (error) {
    console.log(error, 'Error, auth');
    return res.status(serverError).json({ error: { message: 'Internal Server Error' } });
  }
};