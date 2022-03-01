const PatientModel = require("../Models/PatientsListModel");
const mongoose = require("mongoose");
exports.controllerAddNewPatient = async (req, res) => {
  try {
    const newPatient = new PatientModel({
      _id: new mongoose.Types.ObjectId(),
      patientPersonalData: {
        ...req.body,
      },
    });
    await newPatient.save((err) => {
      err && console.log(err);
    });
    res.send(newPatient);
  } catch (e) {
    res
      .status(400)
      .send({ error: "Не удалось добавить пациента в базу данных" });
  }
};
