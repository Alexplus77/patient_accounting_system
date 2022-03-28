const Administrators = require("../../Models/AdministratorModel");
const Doctors = require("../../Models/DoctorModel");
const SuperAdministrators = require("../../Models/SuperAdministratorModel");
const Patients = require("../../Models/PatientsListModel");
const bcrypt = require("bcryptjs");
exports.controller_defaultDataDB = async (req, res) => {
  try {
    await new Administrators({
      administratorPersonalData: {
        personData: {
          lastName: "admin",
          name: "admin",
          role: "admin",
          login: "admin",
          password: bcrypt.hashSync("admin", 10),
        },
      },
    }).save();
  } catch (e) {}
};
