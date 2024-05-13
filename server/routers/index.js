const router = require('express').Router();
const apiRouter = require("./api.router");

router.get("/", (req,res)=>{
    res.send("i am from backend")
})
router.use("/api/v1", apiRouter);

module.exports = router;