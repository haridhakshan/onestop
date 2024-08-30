const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('ipr_management', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;