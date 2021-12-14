const router = require('express').Router();
const { models: User } = require('../db');

const cookieParser = require('cookie-parser');
const cookieSecret = process.env.cookieSecret;
router.use(cookieParser(cookieSecret));

router.post('/signup', async (req, res, next) => {
  try {
    const user = await User.create(req.body);
    const token = user.generateToken();
    res.cookie('token', token, {
      sameSite: 'strict',
      httpOnly: true,
      signed: true,
    });
    res.send(user);
  } catch (error) {
    if (err.name === 'SequelizeUniqueConstraintError') {
      res.status(401).send('User already exists');
    } else {
      next(err);
    }
  }
});

module.exports = router;
