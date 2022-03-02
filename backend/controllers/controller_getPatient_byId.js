const PatientModel = require("../Models/PatientsListModel");

exports.controller_getPatient_byId = (req, res) => {
  PatientModel.findById(req.params.id, (err, data) => {
    err && res.status(400).send({ error: err });
    res.status(200).send(data);
  });
};
