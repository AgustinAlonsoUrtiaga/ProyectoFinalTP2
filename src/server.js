const express = require('express');
const bodyParser = require('body-parser');
const taskRoutes = require('./routes/taskRoutes.js');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express')
const swaggerDocs = require('./swagger.js')
const taskRoutes = require('./routes/taskRoutes');
require('dotenv').config();

const Task = require('./models/taskModel.js');

const app = express();

const swaggerPort = '/api-docs'

const corsOptions = {
    origin: [process.env.ORIGIN],
    optionsSuccessStatus: 200,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: ['Content-Type', 'Authorization']
  };

app.use(swaggerPort, swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use('/api', taskRoutes);


Task.sync({ alter: true })
    .then(() => {
        console.log('Tablas sincronizadas con éxito');
    })
    .catch((err) => {
        console.error('Error al sincronizar tablas:', err);
    });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
    console.log(`Swagger UI disponible en http://localhost:${PORT}${swaggerPort}`);
});