const express = require("express");
const userRoutes = require("./userRoutes");

const router = express.Router();

// Rotas para usuários
router.use('/users', userRoutes);

module.exports = router;
