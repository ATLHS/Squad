const express = require("express");
const router = express.Router();
const Mentor = require("../models/Mentor");

const mentor = Mentor.find()
  .then((mentor) => console.log(mentor))
  .catch((error) => console.log(error));

router.get("/mentors", (req, res) => {
  const mentor = Mentor.find()
    .then((mentor) => res.json(mentor))
    .catch((error) => res.sendStatus(404).json({ error }));
  //   console.log(mentor);
  //   res.json(mentor);
});

module.exports = router;
