const Sequelize = require('sequelize');
const db = require('../db');

const jwt = require('jsonwebtoken');
const SALT_ROUNDS = 10;

const User = db.define('user', {
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
      return this.firstName + ' ' + this.lastName;
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

const hashPassword = async (user) => {
  if (user.changed('password')) {
    user.password = await bcrypt.hash(user.password, SALT_ROUNDS);
  }
};

const lowerCaseEmail = (user) => {
  if (user.changed('email')) {
    user.email = user.email.toLowerCase();
  }
};

User.beforeCreate(hashPassword);
User.beforeUpdate(hashPassword);
User.beforeBulkCreate((users) => Promise.all(users.map(hashPassword)));

User.beforeSave(lowerCaseEmail);
User.beforeBulkCreate((users) => Promise.all(users.map(lowerCaseEmail)));

module.exports = { User };
