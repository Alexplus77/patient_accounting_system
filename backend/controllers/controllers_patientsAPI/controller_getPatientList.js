const PatientModel = require("../../Models/PatientsListModel");

exports.controller_getPatientList = async (req, res) => {
  await PatientModel.find({}, (err, data) => {
    err && res.status(400).send({ error: "Ошибка получения списка пациентов" });
    res.status(200).send(data);
  }).clone();
};
