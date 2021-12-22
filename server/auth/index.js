const router = require("express").Router();
const {
  models: { User },
} = require("../db");
const { tokenMiddleware } = require("../auth-middleware");

const cookieParser = require("cookie-parser");
const cookieSecret = process.env.cookieSecret;
router.use(cookieParser(cookieSecret));

router.post("/signup", async (req, res, next) => {
  try {
    const user = await User.create(req.body);
    const token = user.generateToken();
    res.cookie("token", token, {
      sameSite: "strict",
      httpOnly: true,
      signed: true,
    });
    res.send(user);
  } catch (error) {
    if (error.name === "SequelizeUniqueConstraintError") {
      res.status(401).send("User already exists");
    } else {
      next(err);
    }
  }
});

router.post("/login", async (req, res, next) => {
  try {
    const { user, token } = await User.authenticate(req.body);
    res.cookie("token", token, {
      sameSite: "strict",
      httpOnly: true,
      signed: true,
    });
    res.send(user);
  } catch (error) {
    next(error);
  }
});

router.get("/logout", async (req, res, next) => {
  try {
    res.clearCookie("token", {
      sameSite: "strict",
      httpOnly: true,
      signed: true,
    });
    res.send("temp logged out message");
  } catch (error) {
    next(error);
  }
});

router.get("/load", tokenMiddleware, async (req, res, next) => {
  try {
    res.send(req.user);
  } catch (error) {
    next(error);
  }
});

router.put("/updateUser", tokenMiddleware, async (req, res, next) => {
  try {
    const { email, firstName, lastName } = req.body;
    const updatedUser = await req.user.update({ email, firstName, lastName });
    res.send(updatedUser);
  } catch (error) {
    next(error);
  }
});

router.put("/updatePassword", tokenMiddleware, async (req, res, next) => {
  try {
    const result = await req.user.checkPassword(req.body.currentPassword);
    if (result) {
      await req.user.update({ password: req.body.newPassword });
      res.sendStatus(200);
    } else {
      res.sendStatus(401);
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
