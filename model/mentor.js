const mongoose = require("mogoose");
const Schema = mongoose.Schema;

const mentor = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    image: {data: Buffer, contentType: String},
    password: {type: String, required: true},
    bio: {type: String, required: true},
    price: {type: Number, required: true},
    status: {type: Boolean, default: false},
    isVerified: {type: Boolean, default: false},
})