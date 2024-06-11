const Expense = require("../models/Expense");

const getAllExpenses = (req, res) => {
  Expense.getAll((err, expenses) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(expenses);
  });
};

const getExpenseById = (req, res) => {
  const { id } = req.params;
  Expense.getById(id, (err, expense) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(expense);
  });
};

const createExpense = (req, res) => {
  const { description, category, price, createdAt } = req.body;
  const newExpense = { description, category, price, createdAt };
  Expense.create(newExpense, (err) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ message: "Expense created successfully" });
  });
};

const updateExpense = (req, res) => {
  const { id } = req.params;
  const { description, category, price, createdAt } = req.body;
  const updatedExpense = { description, category, price, createdAt };
  Expense.update(id, updatedExpense, (err) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(200).json({ message: "Expense updated successfully" });
  });
};

const deleteExpense = (req, res) => {
  const { id } = req.params;
  Expense.delete(id, (err) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(200).json({ message: "Expense deleted successfully" });
  });
};

module.exports = {
  getAllExpenses,
  getExpenseById,
  createExpense,
  updateExpense,
  deleteExpense,
};
