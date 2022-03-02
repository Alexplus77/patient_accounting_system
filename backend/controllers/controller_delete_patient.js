const PatientModel = require("../Models/PatientsListModel");

exports.controller_delete_patient = (req, res) => {
  PatientModel.findOneAndDelete({ _id: req.params.id }, (err, result) => {
    err && req.status(400).send({ error: err });
    res.status(200).send(result);
  });
};
