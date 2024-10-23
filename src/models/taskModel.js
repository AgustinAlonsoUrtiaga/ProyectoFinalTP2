const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

const Task = sequelize.define('Task', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
    },
    urgent: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    estimatedTime: {
        type: DataTypes.INTEGER,
    },
    timeUnit: {
        type: DataTypes.STRING,
    },
    status: {
        type: DataTypes.STRING,
    },
    timeUsed: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    scrumSection: {
        type: DataTypes.STRING,
    },
    priority: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 3
    },
    createdDate: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    dueDate: {
        type: DataTypes.DATE,
    },
    environment: {
        type: DataTypes.STRING,
    }
}, {
    tableName: 'tasks'
});

Task.sync()
    .then(() => {
        console.log('Tabla "tasks" sincronizada con éxito.');
    })
    .catch((err) => {
        console.error('Error al sincronizar la tabla "tasks":', err);
    });

module.exports = Task;