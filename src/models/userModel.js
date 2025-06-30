const mongoose = require("mongoose");

//constructor
const userSchema = new mongoose.Schema(
    {
    name: {type: String},
    email: {type: String},
    password: {type: String},
        address: {type: String},
        role: {type: String, default: 'Cliente'},
    },
    {
        timestamps: true,
        versionKey: false
    }
);

const ModelUser = mongoose.model("users", userSchema);

module.exports = ModelUser;