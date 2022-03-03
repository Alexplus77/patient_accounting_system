const mongoose = require("mongoose");

const schemaPatient = mongoose.Schema({
  patientPersonalData: {
    personData: {
      lastName: String,
      name: String,
      patronymic: String,
      dateOfBirth: Date,
      phoneNumber: Number,
      sex: String,
      groupClient: String,
      doctor: String,
    },
    addressData: {
      index: Number,
      country: String,
      region: String,
      city: String,
      street: String,
      numberHouse: Number,
      documentType: String,
    },
    passportData: {
      seriesDocument: String,
      numberDoc: String,
      issuedByWhom: String,
      dateOfIssue: Date,
    },
  },
  patientTreatData: {},
});

module.exports = mongoose.model("PatientModel", schemaPatient);
