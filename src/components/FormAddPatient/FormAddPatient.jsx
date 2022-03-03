import React, { useRef, useState } from "react";
import { FormAddress } from "components/FormAddress";
import { FormPassport } from "components/FormPassport";
import { FormPersonData } from "components/FormPersonData";
import { Form } from "antd";
import { useDispatch } from "react-redux";
import { fetchPostPatient } from "redux/middlewares/fetchPostPatient";
import "./FormAddPatient.css";
import { useNavigate } from "react-router-dom";

const FormAddPatient = () => {
  const dispatch = useDispatch();
  const [formsValue, setForms] = useState({});
  const clearForms = ({ formAddress, formPassport, formPersonData }) => {
    formPassport.resetFields();
    formAddress.resetFields();
    formPersonData.resetFields();
  };
  const navigate = useNavigate();
  return (
    <Form.Provider
      onFormChange={(name, { forms }) => {
        setForms({ ...formsValue, ...forms });
      }}
      onFormFinish={(name, { values, forms }) => {
        const { formAddress, formPassport, formPersonData } = forms;
        const valueUser = {
          personData: formPersonData.getFieldsValue(),
          addressData: formAddress.getFieldsValue(),
          passportData: formPassport.getFieldsValue(),
        };
        dispatch(fetchPostPatient(valueUser));
        clearForms({ formAddress, formPassport, formPersonData });
        navigate("/administrator");
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
        <FormPassport formsValue={formsValue} clearForm={clearForms} />
      </div>
    </Form.Provider>
  );
};
export { FormAddPatient };
