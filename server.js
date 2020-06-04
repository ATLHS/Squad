require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 5000;
const secure = require("express-force-https");
const isProd = process.env.NODE_ENV === "production";
const user = require("./routes/user");
const mentor = require("./routes/mentor");

mongoose.set("useCreateIndex", true);
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Mongo DB succesfully connected"))
  .catch((err) => console.log(err));

app.use(secure);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/images", express.static(path.join(__dirname, "images")));
app.use("/user", user);
app.use("/api", mentor);

if (isProd) {
  app.use(express.static(path.join(__dirname, "client/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}
app.listen(PORT, (req, res) => {
  console.log("app listening on port 5000");
});
