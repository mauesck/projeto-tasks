const express = require('express');
const app = express();
const routes = require('./routes/index');
const bodyParser = require('body-parser');

// Configura o body-parser para analisar application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Configura o body-parser para analisar application/json
app.use(bodyParser.json());

// Configura o mecanismo de visualização como EJS
app.set('view engine', 'ejs');

// Configura o Express.js para servir arquivos estáticos da pasta 'public'
app.use(express.static('public'));

// Use suas rotas
app.use('/', routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running in http://localhost:${PORT}`);
});
