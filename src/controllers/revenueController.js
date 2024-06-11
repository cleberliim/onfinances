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
    res.status(201).json({ message: "Revenue created successfully" });
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
    res.status(200).json({ message: "Revenue updated successfully" });
  });
};

const deleteRevenue = (req, res) => {
  const { id } = req.params;
  Revenue.delete(id, (err) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(200).json({ message: "Revenue deleted successfully" });
  });
};

module.exports = {
  getAllRevenues,
  getRevenueById,
  createRevenue,
  updateRevenue,
  deleteRevenue,
};
