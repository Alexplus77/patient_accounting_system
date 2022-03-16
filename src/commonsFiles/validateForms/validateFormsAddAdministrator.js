export const validateFormsAddAdministrator = (forms) => {
  const errorField = Object.values(forms).map((form) => {
    return form.getFieldsError().find((el) => el.errors.length);
  });
  const { formAddress, formPersonData } = forms;
  const requiredFieldsPersonalData = Object.values(
    formPersonData.getFieldsValue([
      "name",
      "lastName",
      "dateOfBirth",
      "phoneNumber",
    ])
  );

  const requiredFieldsAddress = Object.values(
    formAddress.getFieldsValue(["city"])
  );
  if (
    [...requiredFieldsPersonalData, ...requiredFieldsAddress].includes(
      undefined
    ) ||
    !errorField.every((el) => el === undefined)
  ) {
    return true;
  }
};
