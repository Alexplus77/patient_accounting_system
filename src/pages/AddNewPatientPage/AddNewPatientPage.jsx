import React, { useEffect, useState } from "react";
import { FormAddress } from "components/Forms/FormAddress";
import { FormPassport } from "components/Forms/FormPassport";
import { FormPersonData } from "components/Forms/FormPersonData";
import { Form } from "antd";
import { validateFormsAddPatient } from "commonsFiles/validateFormsAddPatient";
import { useDispatch, useSelector } from "react-redux";
import { fetchPostPatient } from "redux/middlewares/fetchPostPatient";
import "./AddNewPatientPage.css";
import { useNavigate } from "react-router-dom";
import { exit_edit_mode } from "redux/actions/createActions";
import { save_error } from "redux/actions/createActions";

const AddNewPatientPage = () => {
  const { onEditMode, errors } = useSelector((state) => state.storeReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(exit_edit_mode());
  }, []);

  const [valueForm, setValueForm] = useState({});
  const clearForms = ({ formAddress, formPassport, formPersonData }) => {
    if ((formAddress, formPassport, formPersonData)) {
      formPassport.resetFields();
      formAddress.resetFields();
      formPersonData.resetFields();
    }
  };

  const navigate = useNavigate();
  return (
    <Form.Provider
      onFormChange={(name, { forms }) => {
        setValueForm({ ...valueForm, ...forms });
      }}
      onFormFinish={(name, { values, forms }) => {
        const { formAddress, formPassport, formPersonData } = forms;
        const valueUser = {
          personData: formPersonData.getFieldsValue(),
          addressData: formAddress.getFieldsValue(),
          passportData: formPassport.getFieldsValue(),
        };
        if (validateFormsAddPatient(forms)) {
          dispatch(
            save_error({
              error:
                "Не все поля со звездочкой заполнены или заполнены с ошибкой",
            })
          );
        } else {
          dispatch(fetchPostPatient(valueUser));
          clearForms({ formAddress, formPassport, formPersonData });
          navigate("/administrator");
        }
      }}
    >
      {onEditMode || (
        <div className="container-forms-addPatient">
          <FormPersonData />
          <FormAddress />
          <FormPassport valueForm={valueForm} clearForms={clearForms} />
        </div>
      )}
    </Form.Provider>
  );
};
export { AddNewPatientPage };
