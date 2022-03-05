import React, { useEffect, useState } from "react";
import { FormAddress } from "components/Forms/FormAddress";
import { FormPassport } from "components/Forms/FormPassport";
import { FormPersonData } from "components/Forms/FormPersonData";
import { Form } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { fetchUpdatePatient } from "redux/middlewares/fetchUpdatePatient";
import { fetchPatientById } from "redux/middlewares/fetchPatientById";
import { on_edit_mode } from "redux/actions/createActions";
import "./PatientEditPage.css";
import { useNavigate, useParams } from "react-router-dom";

const PatientEditPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { onEditMode, selectedPatient } = useSelector(
    (state) => state.storeReducer
  );
  const [valueForm, setValueForm] = useState({});

  useEffect(() => {
    dispatch(fetchPatientById(id));
  }, []);

  const clearForms = ({ formAddress, formPassport, formPersonData }) => {
    formPassport.resetFields();
    formAddress.resetFields();
    formPersonData.resetFields();
  };
  const navigate = useNavigate();
  return (
    <Form.Provider
      onFormChange={(name, { forms }) =>
        setValueForm({ ...valueForm, ...forms })
      }
      onFormFinish={(name, { values, forms }) => {
        const { formAddress, formPassport, formPersonData } = forms;
        const valueUser = {
          personData: formPersonData.getFieldsValue(),
          addressData: formAddress.getFieldsValue(),
          passportData: formPassport.getFieldsValue(),
        };
        dispatch(fetchUpdatePatient(id, valueUser));
        clearForms({ formAddress, formPassport, formPersonData });
        navigate("/administrator");
      }}
    >
      {selectedPatient.patientPersonalData && (
        <div className="container-forms-addPatient">
          <FormPersonData />
          <FormAddress />
          <FormPassport />
        </div>
      )}
    </Form.Provider>
  );
};

export { PatientEditPage };
