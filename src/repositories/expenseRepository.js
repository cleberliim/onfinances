const db = require("../utils/db");

class ExpenseRepository {
  static getAll(callback) {
    db.query("SELECT * FROM expenses", callback);
  }

  static getById(id, callback) {
    db.query("SELECT * FROM expenses WHERE id = ?", [id], callback);
  }

  static create(expense, callback) {
    const { description, category, price, createdAt } = expense;
    db.query(
      "INSERT INTO expenses (description, category, price, createdAt) VALUES (?, ?, ?, ?)",
      [description, category, price, createdAt],
      callback
    );
  }

  static update(id, expense, callback) {
    const { description, category, price, createdAt } = expense;
    db.query(
      "UPDATE expenses SET description = ?, category = ?, price = ?, createdAt = ? WHERE id = ?",
      [description, category, price, createdAt, id],
      callback
    );
  }

  static delete(id, callback) {
    db.query("DELETE FROM expenses WHERE id = ?", [id], callback);
  }
}

module.exports = ExpenseRepository;
