const db = require('../config/db');

// Create
exports.createTask = (description, data, callback) => {
    db.query('INSERT INTO tasks (description, data) VALUES (?, ?)', [description, data], (err, result) => {
        if (err) throw err;
        callback(result.insertId);
    });
};

// Read
exports.getAllTasks = (callback) => {
    db.query('SELECT * FROM tasks', (err, rows) => {
        if (err) throw err;
        callback(rows);
    });
};

// Update
exports.updateTask = (id, description, data, callback) => {
    db.query('UPDATE tasks SET description = ?, data = ? WHERE id = ?', [description, data, id], (err, result) => {
        if (err) throw err;
        callback(result.affectedRows > 0);
    });
};

// Delete
exports.deleteTask = (id, callback) => {
    db.query('DELETE FROM tasks WHERE id = ?', [id], (err, result) => {
        if (err) throw err;
        callback(result.affectedRows > 0);
    });
};

