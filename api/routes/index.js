// # Express route controllers for all the endpoints of the app
const { Router } = require("express");

const invoice = require("./invoice");

const router = Router();

router.use("/", invoice);

module.exports = router;
