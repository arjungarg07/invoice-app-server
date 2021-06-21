// # Express route controllers for all the endpoints of the app
const { Router } = require("express");

const invoice = require("./invoice");
const item = require("./item");

const router = Router();

router.use("/", invoice);
router.use("/", item);

module.exports = router;
