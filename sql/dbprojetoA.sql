-- Criação do banco de dados
CREATE DATABASE IF NOT EXISTS projetonode;

-- Seleciona o banco de dados criado
USE projetonode;

-- Criação da tabela tasks
CREATE TABLE IF NOT EXISTS tasks (
    id INT AUTO_INCREMENT PRIMARY KEY,
    description TEXT NOT NULL,
    data DATETIME
);

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'root';

SELECT * FROM tasks;
DESCRIBE tasks;





