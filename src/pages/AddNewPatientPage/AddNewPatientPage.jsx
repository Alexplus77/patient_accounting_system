import React, { useEffect, useState } from "react";
import { FormAddress } from "components/Forms/FormAddress";
import { FormPassport } from "components/Forms/FormPassport";
import { FormPersonData } from "components/Forms/FormPersonData";
import { Form, Modal } from "antd";
import { validateFormsAddPatient } from "commonsFiles/validateForms/validateFormsAddPatient";
import { useDispatch, useSelector } from "react-redux";
import { fetchPostPatient } from "redux/middlewares/middlewaresPanelAdministrator/fetchPatientDB/fetchPostPatient";
import "./AddNewPatientPage.css";
import { useNavigate, useParams } from "react-router-dom";
import { exit_edit_mode, on_edit_mode } from "redux/actions/createActions";
import { fetchPatientById } from "redux/middlewares/middlewaresPanelAdministrator/fetchPatientDB/fetchPatientById";
import { fetchUpdatePatient } from "redux/middlewares/middlewaresPanelAdministrator/fetchPatientDB/fetchUpdatePatient";
import { fetchVerifyAuthUser } from "../../redux/middlewares/fetchVerifyAuthUser";

const AddNewPatientPage = () => {
  const { onEditMode, errors, selectedPatient } = useSelector(
    (state) => state.storeReducer
  );
  const selectItem = selectedPatient?.patientPersonalData;
  const params = useParams();
  const dispatch = useDispatch();
  const errorMassage =
    "Не все поля со звездочкой заполнены или заполнены с ошибкой";

  useEffect(() => {
    dispatch(fetchVerifyAuthUser());
    if (params.id) {
      dispatch(fetchPatientById(params.id));
      dispatch(on_edit_mode);
    } else {
      dispatch(exit_edit_mode());
    }
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
    <div className="container-addPatient-page">
      <Form.Provider
        onFormChange={(name, { forms }) => {
          setValueForm({ ...valueForm, ...forms });
        }}
        onFormFinish={(name, { values, forms }) => {
          console.log(name);
          const { formAddress, formPassport, formPersonData } = forms;
          const valueUser = {
            personData: formPersonData.getFieldsValue(),
            addressData: formAddress.getFieldsValue(),
            passportData: formPassport.getFieldsValue(),
          };

          if (validateFormsAddPatient(forms)) {
            Modal.error({
              title: "Ошибка",
              content: errorMassage,
            });
          } else {
            !params.id
              ? dispatch(fetchPostPatient(valueUser))
              : dispatch(fetchUpdatePatient(params.id, valueUser));

            clearForms({ formAddress, formPassport, formPersonData });
            navigate("/administrator");
          }
        }}
      >
        {params.id ? (
          selectedPatient?.patientPersonalData && (
            <div className="container-forms-addPatient">
              <FormPersonData selectItem={selectItem} />
              <FormAddress selectItem={selectItem} />
              <FormPassport
                selectItem={selectItem}
                valueForm={valueForm}
                clearForms={clearForms}
              />
            </div>
          )
        ) : (
          <div className="container-forms-addPatient">
            <FormPersonData />
            <FormAddress />
            <FormPassport valueForm={valueForm} clearForms={clearForms} />
          </div>
        )}
      </Form.Provider>
    </div>
  );
};
export { AddNewPatientPage };
