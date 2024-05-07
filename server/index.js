require("dotenv").config();
const express = require("express");
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 8080;
const DATA_BASE = process.env.DATA_BASE;
const indexRouer = require("./routers/index");

// to connect with database

mongoose.connect(DATA_BASE)
  .then(() => console.log('database Connected!'));

app.use("/",indexRouer);
app.use(express.json());


app.listen(PORT, ()=>{
    console.log("app is running on  port:" + PORT);
});