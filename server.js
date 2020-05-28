require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 5000;
const secure = require('ssl-express-www');
const isProd = process.env.NODE_ENV === "production";
const user = require('./routes/user');

mongoose.set('useCreateIndex', true);
mongoose
    .connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Mongo DB succesfully connected"))
    .catch(err => console.log(err))

app.use(secure);
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use("/user", user);


if(isProd) {
    app.use(express.static(path.join(__dirname, 'client/build')));
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
}
app.listen(PORT, (req, res) => {
    console.log("app listening on port 5000");
})