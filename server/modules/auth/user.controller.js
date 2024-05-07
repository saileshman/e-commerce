const router = require("express").Router();
const userModel = require("./user.model");
const bcrypt = require("bcrypt");
const saltRounds = 10;


const create = async(payload,Hashpasswords)=>{
    let {password, ...rest} = payload;
    rest.password = await bcrypt.hash(password, saltRounds);
     
    return userModel.create(rest)

}

// this is for login 

const Login = async(email, password)=>{
    const existUser = await userModel.findOne({email});
    if(!existUser) throw new Error ("user do not exist")
    const userMatch = await bcrypt.compare(password, existUser.password);
    if(!userMatch) throw new Error ("email or password do not match")
    return true;

}



module.exports = {create, Login};