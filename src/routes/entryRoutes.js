const express = require("express");
const entryController = require("../controllers/entryController");

const router = express.Router();

router.get("/", entryController.getAllEntries);
router.get("/:id", entryController.getEntryById);
router.post("/", entryController.createEntry);
router.put("/:id", entryController.updateEntry);
router.delete("/:id", entryController.deleteEntry);

module.exports = router;
