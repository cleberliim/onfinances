const db = require("../utils/db");

class RevenueRepository {
  static getAll(callback) {
    db.query("SELECT * FROM revenues", callback);
  }

  static getById(id, callback) {
    db.query("SELECT * FROM revenues WHERE id = ?", [id], callback);
  }

  static create(revenue, callback) {
    const { description, category, price, createdAt } = revenue;
    db.query(
      "INSERT INTO revenues (description, category, price, createdAt) VALUES (?, ?, ?, ?)",
      [description, category, price, createdAt],
      callback
    );
  }

  static update(id, revenue, callback) {
    const { description, category, price, createdAt } = revenue;
    db.query(
      "UPDATE revenues SET description = ?, category = ?, price = ?, createdAt = ? WHERE id = ?",
      [description, category, price, createdAt, id],
      callback
    );
  }

  static delete(id, callback) {
    db.query("DELETE FROM revenues WHERE id = ?", [id], callback);
  }
}

module.exports = RevenueRepository;
