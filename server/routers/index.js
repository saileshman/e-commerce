const router = require('express').Router();
const apiRouter = require("./api.router");
router.use("/api/v1", apiRouter);

module.exports = router;