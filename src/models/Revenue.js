const RevenueRepository = require("../repositories/revenueRepository");

class Revenue {
  static getAll(callback) {
    RevenueRepository.getAll(callback);
  }

  static getById(id, callback) {
    RevenueRepository.getById(id, callback);
  }

  static create(revenue, callback) {
    RevenueRepository.create(revenue, callback);
  }

  static update(id, revenue, callback) {
    RevenueRepository.update(id, revenue, callback);
  }

  static delete(id, callback) {
    RevenueRepository.delete(id, callback);
  }
}

module.exports = Revenue;
