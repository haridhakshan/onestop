const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Patent = sequelize.define('Patent', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    filedDate: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    renewalDate: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    legalSupportRequested: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    tableName: 'patents',
});

module.exports = Patent;