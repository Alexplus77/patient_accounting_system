const express = require("express");
const router = express.Router();
const controller_addPatient = require("../controllers/controller_addNewPatient");
const controller_getPatientList = require("../controllers/controller_getPatientList");
const controller_deletePatient = require("../controllers/controller_delete_patient");
const controller_getPatient_byId = require("../controllers/controller_getPatient_byId");

router.post("/newPatient", controller_addPatient.controllerAddNewPatient);
router.get("/patientList", controller_getPatientList.controller_getPatientList);
router.get(
  "/patientList:id",
  controller_getPatient_byId.controller_getPatient_byId
);
router.delete("/delete:id", controller_deletePatient.controller_delete_patient);

module.exports = router;
