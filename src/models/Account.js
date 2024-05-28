const db = require("../utils/db");

class Account {
  static getAll(callback) {
    db.query("SELECT * FROM accounts", callback);
  }

  static getById(id, callback) {
    db.query("SELECT * FROM accounts WHERE id = ?", [id], callback);
  }

  static create(account, callback) {
    db.query(
      "INSERT INTO accounts (name, amount) VALUES (?, ?)",
      [account.name, account.amount],
      callback
    );
  }

  static update(id, account, callback) {
    db.query(
      "UPDATE accounts SET name = ?, amount = ? WHERE id = ?",
      [account.name, account.amount, id],
      callback
    );
  }

  static delete(id, callback) {
    db.query("DELETE FROM accounts WHERE id = ?", [id], callback);
  }
}

module.exports = Account;
