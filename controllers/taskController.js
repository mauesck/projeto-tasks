const Task = require('../models/taskModel');
const moment = require('moment');

// Create
exports.createTask = (req, res) => {
    const { description, data } = req.body;
    Task.createTask(description, data, (insertId) => {
        res.redirect('/');
    });
};

// Read
exports.getAllTasks = (req, res) => {
    Task.getAllTasks((tasks) => {
        // Formatando a data de cada tarefa antes de enviar para a view
        tasks.forEach(task => {
            task.data = moment(task.data).locale('pt-br').format('dddd DD/MMM/YYYY HH:mm:ss');
            task.ehParaHoje = moment(task.data).isSame(moment(), 'day');
        });

        res.render('index', { tasks });
    });
};

// Update
exports.updateTask = (req, res) => {
    const { id, description, data } = req.body;
    Task.updateTask(id, description, data, (success) => {
        res.redirect('/');
    });
};

// Delete
exports.deleteTask = (req, res) => {
    const { id } = req.body;
    Task.deleteTask(id, (success) => {
        res.redirect('/');
    });
};
