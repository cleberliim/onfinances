const express = require("express");
const config = require("./db/config");
const routes = require("./routes");
const logger = require("./middleware/logger");

const app = express();

// Middleware para parsear JSON
app.use(express.json());

// Middleware de logging
app.use(logger);

// Usar as rotas
app.use("/api", routes);

const port = config.port;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

module.exports = app;
