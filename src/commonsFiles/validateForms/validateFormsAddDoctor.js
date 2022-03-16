export const validateFormsAddDoctor = (forms) => {
  const errorField = Object.values(forms).map((form) => {
    return form.getFieldsError().find((el) => el.errors.length);
  });
  const { formAddress, formPersonData, formDoctorData } = forms;
  const requiredFieldsPersonalData = Object.values(
    formPersonData.getFieldsValue([
      "name",
      "lastName",
      "dateOfBirth",
      "phoneNumber",
    ])
  );
  const requiredFieldsDoctorData = Object.values(
    formDoctorData.getFieldsValue(["specialization", "numberOfDiploma"])
  );
  const requiredFieldsAddress = Object.values(
    formAddress.getFieldsValue(["city"])
  );
  if (
    [
      ...requiredFieldsPersonalData,
      ...requiredFieldsDoctorData,
      ...requiredFieldsAddress,
    ].includes(undefined) ||
    !errorField.every((el) => el === undefined)
  ) {
    return true;
  }
};
