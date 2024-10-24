const swaggerJSDoc = require('swagger-jsdoc');

const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'Task Manager',
            version: '1.0.0',
            description: 'Documentación de la API',
        },
        servers: [
            {
                url: 'http://localhost:3000',
            }
        ],
        tags: [
            {
                name: 'Tasks',
                description: 'Gestión de Tareas'
            }
        ],
    },
    apis: ['./routes/taskRoutes.js'],
};

const swaggerDocs = swaggerJSDoc(swaggerOptions);

module.exports = swaggerDocs