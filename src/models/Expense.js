const ExpenseRepository = require("../repositories/expenseRepository");

class Expense {
  static getAll(callback) {
    ExpenseRepository.getAll(callback);
  }

  static getById(id, callback) {
    ExpenseRepository.getById(id, callback);
  }

  static create(expense, callback) {
    ExpenseRepository.create(expense, callback);
  }

  static update(id, expense, callback) {
    ExpenseRepository.update(id, expense, callback);
  }

  static delete(id, callback) {
    ExpenseRepository.delete(id, callback);
  }

  static search(term, callback) {
    ExpenseRepository.search(term, callback);
  }
}

module.exports = Expense;
