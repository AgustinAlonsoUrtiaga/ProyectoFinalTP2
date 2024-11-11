const express = require('express');
const bodyParser = require('body-parser');
const taskRoutes = require('./routes/taskRoutes');
const emailRoutes = require('./routes/emailRoutes');
const authMiddleware = require('./middlewares/authMiddleware');
const userRoutes = require('./routes/userRoutes');

require('dotenv').config();

const Task = require('./models/taskModel');

const app = express();

app.use(bodyParser.json());

app.use('/api/users', userRoutes);
app.use('/api', authMiddleware, taskRoutes);
app.use('/api', authMiddleware, emailRoutes);

Task.sync({ alter: true })
    .then(() => {
        console.log('Tablas sincronizadas con éxito');
    })
    .catch((err) => {
        console.error('Error al sincronizar tablas:', err);
    });

// Configurar el puerto
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});