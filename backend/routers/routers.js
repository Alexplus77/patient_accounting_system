const express = require("express");
const router = express.Router();
const controller_addPatient = require("../controllers/controller_addNewPatient");
const controller_getPatientList = require("../controllers/controller_getPatientList");

router.post("/newPatient", controller_addPatient.controllerAddNewPatient);
router.get("/patientList", controller_getPatientList.controller_getPatientList);

module.exports = router;
