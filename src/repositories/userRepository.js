const db = require("../utils/db");

class UserRepository {
  static getAll(callback) {
    db.query("SELECT * FROM users", callback);
  }

  static getById(id, callback) {
    db.query("SELECT * FROM users WHERE id = ?", [id], callback);
  }

  static create(user, callback) {
    const { name, email } = user;
    db.query(
      "INSERT INTO users (name, email) VALUES (?, ?)",
      [name, email],
      callback
    );
  }

  static update(id, user, callback) {
    const { name, email } = user;
    db.query(
      "UPDATE users SET name = ?, email = ? WHERE id = ?",
      [name, email, id],
      callback
    );
  }

  static delete(id, callback) {
    db.query("DELETE FROM users WHERE id = ?", [id], callback);
  }
}

module.exports = UserRepository;
