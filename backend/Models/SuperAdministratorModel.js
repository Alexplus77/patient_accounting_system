const mongoose = require("mongoose");

const schemaSuperAdministrator = mongoose.Schema({
  superAdministratorPersonalData: {
    personData: {
      lastName: String,
      name: String,
      patronymic: String,
      dateOfBirth: Date,
      phoneNumber: Number,
      role: String,
    },
    addressData: {
      index: Number,
      country: String,
      region: String,
      city: String,
      street: String,
      numberHouse: Number,
    },
    passportData: {
      documentType: String,
      seriesDocument: String,
      numberDoc: String,
      issuedByWhom: String,
      dateOfIssue: Date,
      login: { type: String, unique: true },
      password: { type: String, unique: true },
    },
  },
});

module.exports = mongoose.model(
  "SuperAdministratorModel",
  schemaSuperAdministrator
);
