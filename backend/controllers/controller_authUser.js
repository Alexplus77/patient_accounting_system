const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const Administrators = require("../Models/AdministratorModel");
const Doctors = require("../Models/DoctorModel");
const SuperAdministrators = require("../Models/SuperAdministratorModel");
const Patients = require("../Models/PatientsListModel");

const tokenGenerate = (userDataDB, res, req, path) => {
  bcrypt.compare(
    req.body.password,
    userDataDB.passportData.password,
    (err, result) => {
      err && res.status(403).send({ error: "Не правильно введен пароль" });
      if (result) {
        const token = jwt.sign(
          {
            role: userDataDB.personData.role,
            login: userDataDB.passportData.login,
          },
          "Very secret word",
          { expiresIn: "1h" },
          {}
        );
        res.status(200).send({
          role: userDataDB.personData.role,
          token,
          path,
          dataUser: {
            name: userDataDB.personData.name,
            lastName: userDataDB.personData.lastName,
            patronymic: userDataDB.personData.lastName,
          },
        });
      }
    }
  );
};

exports.controller_authUser = (req, res) => {
  switch (req.body.selectRole) {
    case "admin":
      return Administrators.findOne(
        { "administratorPersonalData.passportData.login": req.body.name },
        (err, data) => {
          err &&
            res
              .status(404)
              .send({ error: "Пользователя с таким логином не существует" });
          if (data?.administratorPersonalData) {
            const {
              administratorPersonalData: { personData, passportData },
            } = data;
            tokenGenerate(
              { personData, passportData },
              res,
              req,
              "/administrator"
            );
          } else {
            res
              .status(403)
              .send({ error: "Не правильно введен логин или пароль" });
          }
          console.log("errorAuth", err);
        }
      ).clone();
    case "superAdmin":
      return SuperAdministrators.findOne(
        { "superAdministratorPersonalData.passportData.login": req.body.name },
        (err, data) => {
          err &&
            res
              .status(404)
              .send({ error: "Пользователя с таким логином не существует" });
          if (data?.superAdministratorPersonalData) {
            const {
              superAdministratorPersonalData: { personData, passportData },
            } = data;
            tokenGenerate(
              { personData, passportData },
              res,
              req,
              "/superAdministrator"
            );
          } else {
            res
              .status(403)
              .send({ error: "Не правильно введен логин или пароль" });
          }
          console.log("errorAuth", err);
        }
      ).clone();

    case "doctor":
      return Doctors.findOne(
        { "doctorPersonalData.passportData.login": req.body.name },
        (err, data) => {
          err &&
            res
              .status(404)
              .send({ error: "Пользователя с таким логином не существует" });
          if (data?.doctorPersonalData) {
            const {
              doctorPersonalData: { personData, passportData },
            } = data;
            tokenGenerate(
              { personData, passportData },
              res,
              req,
              `/pageDoctorId${data._id}`
            );
          } else {
            res
              .status(403)
              .send({ error: "Не правильно введен логин или пароль" });
          }
          err && console.log("errorAuth", err);
        }
      ).clone();

    default:
      return;
  }
};
