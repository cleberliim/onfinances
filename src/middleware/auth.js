const authenticate = (req, res, next) => {
  const token = req.headers["authorization"];
  if (token) {
    // Valide o token aqui (este é um exemplo simplificado)
    // Você pode usar bibliotecas como jsonwebtoken para validação real
    if (token === "seu_token_secreto") {
      next();
    } else {
      res.status(401).json({ error: "Token inválido" });
    }
  } else {
    res.status(401).json({ error: "Token não fornecido" });
  }
};

module.exports = authenticate;
