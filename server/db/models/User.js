const Sequelize = require("sequelize");
const db = require("../db");

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const SALT_ROUNDS = 10;

const User = db.define("user", {
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
    validate: {
      isEmail: true,
      notEmpty: true,
    },
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  fullName: {
    type: Sequelize.VIRTUAL,
    get() {
      return this.firstName + " " + this.lastName;
    },
  },
  isAdmin: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
});

User.prototype.generateToken = function () {
  const token = jwt.sign({ id: this.id }, process.env.JWT);
  return token;
};

User.prototype.checkPassword = function (inputPassword) {
  const result = bcrypt.compare(inputPassword, this.password);
  return result;
};

User.authenticate = async ({ email, password }) => {
  try {
    const user = await User.findOne({ where: { email } });
    const result = await user.checkPassword(password);
    if (!user || !result) {
      const error = Error("Bad credentials");
      error.status = 401;
      throw error;
    }
    const token = await user.generateToken();
    return { user, token };
  } catch (error) {
    const customError = Error("Unable to authenticate");
    customError.status = 401;
    throw customError;
  }
};

User.findByToken = async (token) => {
  try {
    const verifiedToken = await jwt.verify(token, process.env.JWT);
    const user = await User.findByPk(verifiedToken.id);
    if (!user) {
      throw "Unable to find user";
    }
    return user;
  } catch (error) {
    const customError = Error("Unable to verify token");
    customError.status = 401;
    throw customError;
  }
};

const hashPassword = async (user) => {
  if (user.changed("password")) {
    user.password = await bcrypt.hash(user.password, SALT_ROUNDS);
  }
};

const lowerCaseEmail = (user) => {
  if (user.changed("email")) {
    user.email = user.email.toLowerCase();
  }
};

User.beforeCreate(hashPassword);
User.beforeUpdate(hashPassword);
User.beforeBulkCreate((users) => Promise.all(users.map(hashPassword)));

User.beforeSave(lowerCaseEmail);
User.beforeBulkCreate((users) => Promise.all(users.map(lowerCaseEmail)));

module.exports = { User };
