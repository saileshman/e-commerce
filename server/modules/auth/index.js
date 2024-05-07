const router = require("express").Router();
const userController = require("./user.controller");

const express = require('express')
router.use(express.json())


router.post("/register", async(req,res)=>{

    try {
        const result = await userController.create(req.body);
        res.json({ data :result, msg: "success" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }

})


// this is for login

router.post("/login", async(req,res)=>{
    const {email, password} = req.body;
    if(!email || !password ) throw new Error ("invalid password or email");
    const result = await userController.Login(email, password);
    res.json({data: result, msg: "login successfull!!!"})
})



module.exports = router;