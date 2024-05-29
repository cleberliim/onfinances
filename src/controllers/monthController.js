const Month = require("../models/Month");

const getAllMonths = (req, res) => {
  Month.getAll((err, months) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(months);
  });
};

const getMonthById = (req, res) => {
  const { id } = req.params;
  Month.getById(id, (err, month) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(month);
  });
};

const createMonth = (req, res) => {
  const { month_name, year } = req.body;
  const newMonth = { month_name, year };
  Month.create(newMonth, (err) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ message: "Month created successfully" });
  });
};

const updateMonth = (req, res) => {
  const { id } = req.params;
  const { month_name, year } = req.body;
  const updatedMonth = { month_name, year };
  Month.update(id, updatedMonth, (err) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(200).json({ message: "Month updated successfully" });
  });
};

const deleteMonth = (req, res) => {
  const { id } = req.params;
  Month.delete(id, (err) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(200).json({ message: "Month deleted successfully" });
  });
};

module.exports = {
  getAllMonths,
  getMonthById,
  createMonth,
  updateMonth,
  deleteMonth,
};
