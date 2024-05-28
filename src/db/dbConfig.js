const mysql = require("mysql");
const config = require("../db/config"); // Ajuste o caminho conforme necessário

const pool = mysql.createPool({
  connectionLimit: 10,
  host: config.db.host,
  user: config.db.user,
  password: config.db.password,
  database: config.db.database,
});

// Teste simples de conexão
pool.getConnection((err, connection) => {
  if (err) {
    console.error("Erro de conexão ao banco de dados:", err);
    if (err.code === "ECONNREFUSED") {
      console.error(
        "Conexão recusada. Verifique se o servidor MySQL está em execução."
      );
    } else if (err.code === "ER_ACCESS_DENIED_ERROR") {
      console.error(
        "Acesso negado. Verifique as credenciais do banco de dados."
      );
    } else if (err.code === "ENOTFOUND") {
      console.error(
        "Host do banco de dados não encontrado. Verifique a configuração do host."
      );
    } else if (err.code === "ER_BAD_DB_ERROR") {
      console.error(
        "Banco de dados não encontrado. Verifique o nome do banco de dados."
      );
    } else {
      console.error("Erro desconhecido:", err);
    }
    return;
  }
  console.log("Conectado ao banco ")
});

module.exports = pool;
