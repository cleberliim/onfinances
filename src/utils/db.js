const mysql = require("mysql");
const config = require("../db/config");

// Crie um pool de conexões com as configurações fornecidas
const pool = mysql.createPool({
  connectionLimit: 10, // Limite máximo de conexões
  host: config.db.host,
  user: config.db.user,
  password: config.db.password,
  database: config.db.database,
});

// Ao conectar-se ao pool de conexões, não é necessário chamar connection.connect()

// Exporte o pool de conexões para uso em outros módulos
module.exports = pool;
