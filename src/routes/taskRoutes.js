const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController.js');

/**
 * @swagger
 * /api/tasks:
 *   get:
 *     summary: Obtener todas las tareas
 *     tags: [Tasks]
 *     responses:
 *       200:
 *         description: Lista de tareas
 */
router.get('/tasks', taskController.getAllTasks);

/**
 * @swagger
 * /api/tasks/{id}:
 *   get:
 *     summary: Obtener tarea por ID
 *     tags: [Tasks]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID de la tarea
 *     responses:
 *       200:
 *         description: Tarea encontrada
 *       404:
 *         description: Tarea no encontrada
 */
router.get('/tasks/:id', taskController.getTaskById);

/**
 * @swagger
 * /api/tasks:
 *   post:
 *     summary: Crear nueva tarea
 *     tags: [Tasks]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       201:
 *         description: Tarea creada
 */
router.post('/tasks', taskController.createTask);

/**
 * @swagger
 * /api/tasks/{id}:
 *   put:
 *     summary: Actualizar tarea por ID
 *     tags: [Tasks]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID de la tarea
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       200:
 *         description: Tarea actualizada
 *       404:
 *         description: Tarea no encontrada
 */
router.put('/tasks/:id', taskController.updateTask);

/**
 * @swagger
 * /api/tasks/{id}:
 *   delete:
 *     summary: Eliminar tarea por ID
 *     tags: [Tasks]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID de la tarea
 *     responses:
 *       204:
 *         description: Tarea eliminada
 *       404:
 *         description: Tarea no encontrada
 */
router.delete('/tasks/:id', taskController.deleteTask);

module.exports = router;