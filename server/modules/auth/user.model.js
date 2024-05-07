const {Schema, model, default: mongoose} = require("mongoose");

const userSchema = new Schema({
    name: {type:String},
    email: {type: String, unique: true},
    password: {type: String}
}, {timestamps: true})

module.exports = model("Users", userSchema);