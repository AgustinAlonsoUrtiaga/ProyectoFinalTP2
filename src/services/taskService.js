const Task = require('../models/taskModel');

const taskService = {
    getAllTasks: async () => {
        try {
            const tasks = await Task.findAll({
                order: [
                    ['priority', 'ASC']
                ]
            });
            return tasks;
        } catch (err) {
            throw err;
        }
    },
    updatePriority: async (taskId, newPriority) => {
        try {
            const task = await Task.findByPk(taskId);
            if (task) {
                task.priority = newPriority;
                await task.save();
                return task;
            } else {
                throw new Error('Task not found');
            }
        } catch (err) {
            throw err;
        }
    },
    getTaskById: async (id) => {
        try {
            const task = await Task.findByPk(id);
            return task;
        } catch (err) {
            throw err;
        }
    },

    getTaskByEnvironment: async (environment) => {
        try {
            const tasks = await Task.findAll({
                where: { environment },
            });
            return tasks;
        } catch (err) {
            throw err;
        }
    },

    createTask: async (taskData) => {
        try {
            const newTask = await Task.create(taskData);
            return newTask;
        } catch (err) {
            throw err;
        }
    },

    updateTask: async (id, taskData) => {
        try {
            const task = await Task.findByPk(id);
            if (!task) {
                throw new Error('Tarea no encontrada');
            }
            await task.update(taskData);
            return task;
        } catch (err) {
            throw err;
        }
    },

    deleteTask: async (id) => {
        try {
            const task = await Task.findByPk(id);
            if (!task) {
                throw new Error('Tarea no encontrada');
            }
            await task.destroy();
            return { message: 'Tarea eliminada' };
        } catch (err) {
            throw err;
        }
    }
};

module.exports = taskService;