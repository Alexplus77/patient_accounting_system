const express = require("express");
const router = express.Router();
const controller_addPatient = require("../controllers/controllers_patientsAPI/controller_addNewPatient");
const controller_getPatientList = require("../controllers/controllers_patientsAPI/controller_getPatientList");
const controller_deletePatient = require("../controllers/controllers_patientsAPI/controller_delete_patient");
const controller_getPatient_byId = require("../controllers/controllers_patientsAPI/controller_getPatient_byId");
const controller_authUser = require("../controllers/controller_authUser");

router.post("/authUser", controller_authUser.controller_authUser);
router.post("/newPatient", controller_addPatient.controllerAddNewPatient);
router.get("/patientList", controller_getPatientList.controller_getPatientList);
router.get(
  "/patientList:id",
  controller_getPatient_byId.controller_getPatient_byId
);
router.delete("/delete:id", controller_deletePatient.controller_delete_patient);

module.exports = router;
