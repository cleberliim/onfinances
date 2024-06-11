const Revenue = require("../models/Revenue");

const getAllRevenues = (req, res) => {
  Revenue.getAll((err, revenues) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(revenues);
  });
};

const getRevenueById = (req, res) => {
  const { id } = req.params;
  Revenue.getById(id, (err, revenue) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(revenue);
  });
};

const createRevenue = (req, res) => {
  const { description, category, price, createdAt } = req.body;
  const newRevenue = { description, category, price, createdAt };
  Revenue.create(newRevenue, (err) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ message: "Receita criada com sucesso" });
  });
};

const updateRevenue = (req, res) => {
  const { id } = req.params;
  const { description, category, price, createdAt } = req.body;
  const updatedRevenue = { description, category, price, createdAt };
  Revenue.update(id, updatedRevenue, (err) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(200).json({ message: "Receita atualizada com sucesso" });
  });
};

const deleteRevenue = (req, res) => {
  const { id } = req.params;
  Revenue.delete(id, (err) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(200).json({ message: "Receita excluída com sucesso" });
  });
};

module.exports = {
  getAllRevenues,
  getRevenueById,
  createRevenue,
  updateRevenue,
  deleteRevenue,
};
