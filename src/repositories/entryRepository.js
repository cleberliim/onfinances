const db = require("../utils/db");

class EntryRepository {
  static getAll(callback) {
    db.query("SELECT * FROM entries", callback);
  }

  static getById(id, callback) {
    db.query("SELECT * FROM entries WHERE id = ?", [id], callback);
  }

  static create(entry, callback) {
    const { description, category, price, createdAt } = entry;
    db.query(
      "INSERT INTO entries (description, category, price, createdAt) VALUES (?, ?, ?, ?)",
      [description, category, price, createdAt],
      callback
    );
  }

  static update(id, entry, callback) {
    const { description, category, price, createdAt } = entry;
    db.query(
      "UPDATE entries SET description = ?, category = ?, price = ?, createdAt = ? WHERE id = ?",
      [description, category, price, createdAt, id],
      callback
    );
  }

  static delete(id, callback) {
    db.query("DELETE FROM entries WHERE id = ?", [id], callback);
  }
}

module.exports = EntryRepository;
