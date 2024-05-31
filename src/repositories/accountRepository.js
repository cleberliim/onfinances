const db = require("../utils/db");

class AccountRepository {
  static getAll(callback) {
    db.query("SELECT * FROM accounts_payable", callback);
  }

  static getById(id, callback) {
    db.query("SELECT * FROM accounts_payable WHERE id = ?", [id], callback);
  }

  static create(account, callback) {
    const { name, amount, due_date } = account;
    db.query(
      "INSERT INTO accounts_payable (name, amount, due_date) VALUES (?, ?, ?)",
      [name, amount, due_date],
      callback
    );
  }

  static update(id, account, callback) {
    const { name, amount, due_date } = account;
    db.query(
      "UPDATE accounts_payable SET name = ?, amount = ?, due_date = ? WHERE id = ?",
      [name, amount, due_date, id],
      callback
    );
  }

  static delete(id, callback) {
    db.query("DELETE FROM accounts_payable WHERE id = ?", [id], callback);
  }
}

module.exports = AccountRepository;
