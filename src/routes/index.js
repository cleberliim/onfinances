const express = require("express");
const entryRoutes = require("./entryRoutes");
const expenseRoutes = require("./expenseRoutes");
const searchRoutes = require("./searchRoutes");

const router = express.Router();

router.use("/entries", entryRoutes);
router.use("/expenses", expenseRoutes);
router.use("/search", searchRoutes);

module.exports = router;
