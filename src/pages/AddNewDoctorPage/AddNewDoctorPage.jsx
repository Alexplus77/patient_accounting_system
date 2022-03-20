import React, { useEffect, useState } from "react";
import "./AddNewDoctorPage.css";
import { Form, Modal } from "antd";
import { FormPersonData } from "components/Forms/FormPersonData";
import { FormAddress } from "components/Forms/FormAddress";
import { FormPassport } from "components/Forms/FormPassport";
import { FormDoctorData } from "components/Forms/FormDoctorData";
import { validateFormsAddDoctor } from "commonsFiles/validateForms/validateFormsAddDoctor";
import { fetchPostDoctor } from "redux/middlewares/middlewaresPanelSuperAdministrator/fetchDoctorDB/fetchNewDoctor";
import { fetchDoctorById } from "redux/middlewares/middlewaresPanelSuperAdministrator/fetchDoctorDB/fetchDoctorById";
import { fetchUpdateDoctor } from "redux/middlewares/middlewaresPanelSuperAdministrator/fetchDoctorDB/fetchUpdateDoctor";
import { useSelector, useDispatch } from "react-redux";
import { exit_edit_mode, on_edit_mode } from "redux/actions/createActions";
import { useNavigate, useParams } from "react-router-dom";
import { fetchVerifyAuthUser } from "redux/middlewares/fetchVerifyAuthUser";

const AddNewDoctorPage = () => {
  const { selectStaff, selectedAddStuff } = useSelector(
    (state) => state?.stuffReducer
  );
  const selectItem = selectStaff?.doctorPersonalData;
  const errorMassage =
    "Не все поля со звездочкой заполнены или заполнены с ошибкой";
  const params = useParams();
  const dispatch = useDispatch();
  const [valueForm, setValueForm] = useState({});

  useEffect(() => {
    dispatch(fetchVerifyAuthUser());
    if (params.id) {
      dispatch(fetchDoctorById(params.id));
      dispatch(on_edit_mode);
    } else {
      dispatch(exit_edit_mode());
    }
  }, []);

  const clearForms = ({
    formAddress,
    formPassport,
    formPersonData,
    formDoctorData,
  }) => {
    if ((formAddress, formPassport, formPersonData, formDoctorData)) {
      formPassport.resetFields();
      formAddress.resetFields();
      formPersonData.resetFields();
      formDoctorData.resetFields();
    }
  };
  const navigate = useNavigate();
  return (
    <div className="container-addDoctor-page">
      <Form.Provider
        onFormFinish={(name, { values, forms }) => {
          const { formAddress, formPassport, formPersonData, formDoctorData } =
            forms;
          const valueUser = {
            personData: {
              ...formPersonData.getFieldsValue(),
              ...formDoctorData.getFieldsValue(),
              role: "doctor",
            },
            addressData: formAddress.getFieldsValue(),
            passportData: formPassport.getFieldsValue(),
          };
          if (validateFormsAddDoctor(forms)) {
            Modal.error({
              title: "Ошибка",
              content: errorMassage,
            });
          } else {
            !params.id
              ? dispatch(fetchPostDoctor(valueUser))
              : dispatch(fetchUpdateDoctor(params.id, valueUser));
            clearForms({
              formAddress,
              formPassport,
              formPersonData,
              formDoctorData,
            });
            navigate("/superAdministrator");
          }
        }}
        onFormChange={(name, { forms }) => {
          setValueForm({ ...valueForm, ...forms });
        }}
      >
        {params.id ? (
          selectStaff?.doctorPersonalData && (
            <div className="container-forms-addPatient">
              <div className="doctor-data">
                <FormPersonData selectItem={selectItem} />
                <FormDoctorData selectItem={selectItem} />
              </div>
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
            <div className="doctor-data">
              <FormPersonData />
              <FormDoctorData />
            </div>
            <FormAddress />
            <FormPassport valueForm={valueForm} clearForms={clearForms} />
          </div>
        )}
      </Form.Provider>
    </div>
  );
};
export { AddNewDoctorPage };
