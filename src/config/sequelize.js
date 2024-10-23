const { Sequelize } = require('sequelize');
require('dotenv').config();

// Crear una nueva instancia de Sequelize
const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT || 'mysql',
        port: process.env.DB_PORT,
        logging: false,
        pool: {
            max: parseInt(process.env.DB_CONNECTION_LIMIT, 10) || 5,
            min: 0,
            acquire: 30000,
            idle: 10000,
        },
    }
);

sequelize.authenticate()
    .then(() => {
        console.log('Conectado a la base de datos MySQL con Sequelize');
    })
    .catch((err) => {
        console.error('Error al conectar a la base de datos:', err);
    });

module.exports = sequelize;