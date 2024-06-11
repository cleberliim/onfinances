const express = require("express");
const morgan = require("morgan");
const config = require("./db/config");
const routes = require("./routes");
const errorHandler = require("../src/middleware/errorHandler");

const app = express();

// Middleware para parsear JSON
app.use(express.json());

// Middleware de logging HTTP com morgan
app.use(morgan("combined"));

// Usar as rotas
app.use("/api", routes);

// Middleware de tratamento de erros
app.use(errorHandler);

const port = config.port;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

module.exports = app;
