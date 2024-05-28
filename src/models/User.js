const db = require("../utils/db");

class User {
  static getAll(callback) {
    db.query("SELECT * FROM users", callback);
  }

  static getById(id, callback) {
    db.query("SELECT * FROM users WHERE id = ?", [id], callback);
  }

  static create(user, callback) {
    db.query(
      "INSERT INTO users (name, email) VALUES (?, ?)",
      [user.name, user.email],
      callback
    );
  }

  static update(id, user, callback) {
    db.query(
      "UPDATE users SET name = ?, email = ? WHERE id = ?",
      [user.name, user.email, id],
      callback
    );
  }

  static delete(id, callback) {
    db.query("DELETE FROM users WHERE id = ?", [id], callback);
  }
}

module.exports = User;
