const express = require('express');
const router = express.Router();
const TaskController = require('../controllers/taskController');

// Rotas
router.get('/', TaskController.getAllTasks);
router.post('/task/create', TaskController.createTask);
router.post('/task/update', TaskController.updateTask);
router.post('/task/delete', TaskController.deleteTask);

module.exports = router;
