const express = require("express");
const entryRoutes = require("./entryRoutes");
const revenueRoutes = require("./revenueRoutes");
const expenseRoutes = require("./expenseRoutes");

const router = express.Router();

router.use("/entries", entryRoutes);
router.use("/revenues", revenueRoutes);
router.use("/expenses", expenseRoutes);

module.exports = router;
