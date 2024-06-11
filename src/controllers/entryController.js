const Entry = require("../models/Entry");

//lista todas as entradas
const getAllEntries = (req, res) => {
  Entry.getAll((err, entries) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(entries);
  });
};

//lista todas as entradas por id
const getEntryById = (req, res) => {
  const { id } = req.params;
  Entry.getById(id, (err, entry) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(entry);
  });
};

//cria uma entrada
const createEntry = (req, res) => {
  const { description, category, price, createdAt } = req.body;
  const newEntry = { description, category, price, createdAt };
  Entry.create(newEntry, (err) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ message: "Entrada criada com sucesso" });
  });
};

//atualiza entrada
const updateEntry = (req, res) => {
  const { id } = req.params;
  const { description, category, price, createdAt } = req.body;
  const updatedEntry = { description, category, price, createdAt };
  Entry.update(id, updatedEntry, (err) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(200).json({ message: "Entrada atualizada com sucesso" });
  });
};

//atualiza delete
const deleteEntry = (req, res) => {
  const { id } = req.params;
  Entry.delete(id, (err) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(200).json({ message: "Entrada excluída com sucesso" });
  });
};

module.exports = {
  getAllEntries,
  getEntryById,
  createEntry,
  updateEntry,
  deleteEntry,
};
