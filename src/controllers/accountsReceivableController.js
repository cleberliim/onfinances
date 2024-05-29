const AccountsReceivable = require("../models/Account");

const getAllAccounts = (req, res) => {
  AccountsReceivable.getAll((err, accounts) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(accounts);
  });
};

const getAccountById = (req, res) => {
  const { id } = req.params;
  AccountsReceivable.getById(id, (err, account) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(account);
  });
};

const createAccount = (req, res) => {
  const { name, amount, due_date } = req.body;
  const newAccount = { name, amount, due_date };
  AccountsReceivable.create(newAccount, (err) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ message: "Account created successfully" });
  });
};

const updateAccount = (req, res) => {
  const { id } = req.params;
  const { name, amount, due_date } = req.body;
  const updatedAccount = { name, amount, due_date };
  AccountsReceivable.update(id, updatedAccount, (err) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(200).json({ message: "Account updated successfully" });
  });
};

const deleteAccount = (req, res) => {
  const { id } = req.params;
  AccountsReceivable.delete(id, (err) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(200).json({ message: "Account deleted successfully" });
  });
};

module.exports = {
  getAllAccounts,
  getAccountById,
  createAccount,
  updateAccount,
  deleteAccount,
};
