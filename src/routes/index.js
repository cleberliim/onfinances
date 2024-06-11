const express = require("express");
const entryRoutes = require("./entryRoutes");
const expenseRoutes = require("./expenseRoutes");

const router = express.Router();

router.use("/entries", entryRoutes);
router.use("/expenses", expenseRoutes);

module.exports = router;
