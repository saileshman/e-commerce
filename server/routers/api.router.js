const router = require('express').Router();
const userRouter = require("../modules/auth/index");

router.get("/", (req,res)=>{
    res.send({
        result: "i am test api", msg: "success"
    })
})

router.use("/auth", userRouter)
///router.use("/user", userRouter);

module.exports = router;