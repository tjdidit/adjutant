const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  username: 'your_username',
  password: 'your_password',
  database: 'shotgun_dev'
});

module.exports = sequelize;
