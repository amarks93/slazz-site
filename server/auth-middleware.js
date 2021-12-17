const {
  models: { User },
} = require("./db");

const tokenMiddleware = async (req, res, next) => {
  try {
    if (req.signedCookies && req.signedCookies.token) {
      req.user = await User.findByToken(req.signedCookies.token);
      next();
    } else {
      const customError = Error("Unable to find token!");
      customError.status = 401;
      throw customError;
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  tokenMiddleware,
};
