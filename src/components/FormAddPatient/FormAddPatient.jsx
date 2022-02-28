import React, { useRef, useState } from "react";
import { FormAddress } from "components/FormAddress";
import { FormPassport } from "components/FormPassport";
import { FormPersonData } from "components/FormPersonData";
import { Form } from "antd";
import "./FormAddPatient.css";

const FormAddPatient = () => {
  const [clear, setClear] = useState(false);
  const clearForms = ({ formAddress, formPassport, formPersonData }) => {
    formPassport.resetFields();
    formAddress.resetFields();
    formPersonData.resetFields();
  };
  return (
    <Form.Provider
      onFormChange={(name, { forms }) => {
        const { formAddress, formPassport, formPersonData } = forms;
        clear && clearForms({ formAddress, formPassport, formPersonData });
      }}
      onFormFinish={(name, { values, forms }) => {
        const { formAddress, formPassport, formPersonData } = forms;
        const valueUser = {
          ...formPersonData.getFieldsValue(),
          ...formAddress.getFieldsValue(),
          ...formPassport.getFieldsValue(),
        };
        clearForms({ formAddress, formPassport, formPersonData });

        //console.log(valueUser);

        // if (name === "userForm") {

        // const users = basicForm.getFieldValue("users") || [];
        // basicForm.setFieldsValue({ users: [...users, values] });
        // setVisible(false);
        // }
      }}
    >
      <div className="container-forms-addPatient">
        <FormPersonData />
        <FormAddress />
        <FormPassport />
      </div>
    </Form.Provider>
  );
};
export { FormAddPatient };
