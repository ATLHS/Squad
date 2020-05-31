const mongoose = require("mongoose");
// const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;

const mentorSchema = new Schema({
  name: { type: String, required: true },
  firstname: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  live_name: { type: String, required: true },
  bio: { type: String, required: true },
  price: { type: Number, required: true },
  signUpDate: { type: Date, default: Date.now() },
});

// mentorSchema.methods.generateHash = password => {
//     bcrypt.hash(password, 10, (err, hash) => {
//         return hash;
//     });
// }

// mentorSchema.methods.checkPassword = (password, hash) => {
//     bcrypt.compare(password, hash, (err, result) => {
//         return result;
//     });
// }
const Mentor = mongoose.model("Mentor", mentorSchema);

module.exports = Mentor;
