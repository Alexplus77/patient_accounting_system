const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");
const { db } = require("../db");
router.post("/addUsers", (req, res) => {
  try {
    db.push({ id: uuidv4(), ...req.body });
    res.status(200).send(db);
  } catch (e) {
    res
      .status(400)
      .send({ error: "Не удалось добавить пациента в базу данных" });
  }
});

module.exports = router;
