const express = require("express");
const User = require("../models/User");

const router = express.Router();


router.get("/", (req, res) => {
  User.getAll((err, users) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(users);
  });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  User.getById(id, (err, user) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(user);
  });
});

router.post("/", (req, res) => {
  const { name, email } = req.body;
  const newUser = { name, email };
  User.create(newUser, (err) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ message: "Usuario criado com sucesso" });
  });
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  const updatedUser = { name, email };
  User.update(id, updatedUser, (err) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(200).json({ message: "Usuario atualizado com sucesso" });
  });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  User.delete(id, (err) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(200).json({ message: "Usuario deletado com sucesso" });
  });
});

module.exports = router;
