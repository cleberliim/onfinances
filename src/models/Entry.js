const EntryRepository = require("../repositories/entryRepository");

class Entry {
  static getAll(callback) {
    EntryRepository.getAll(callback);
  }

  static getById(id, callback) {
    EntryRepository.getById(id, callback);
  }

  static create(entry, callback) {
    EntryRepository.create(entry, callback);
  }

  static update(id, entry, callback) {
    EntryRepository.update(id, entry, callback);
  }

  static delete(id, callback) {
    EntryRepository.delete(id, callback);
  }
}

module.exports = Entry;
