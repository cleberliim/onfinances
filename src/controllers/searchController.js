const Entry = require("../models/Entry");
const Expense = require("../models/Expense");

const search = (req, res) => {
  const { term } = req.query;

  if (!term) {
    return res.status(400).json({ error: "O termo de pesquisa é obrigatório" });
  }

  Entry.search(term, (err, entries) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    Expense.search(term, (err, expense) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }

      res.json({
        entries,
        expense,
      });
    });
  });
};

module.exports = {
  search,
};
