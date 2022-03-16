import React, { useEffect, useState } from "react";
import "./AddNewAdministratorPage.css";
import { Form, Modal } from "antd";
import { FormPersonData } from "components/Forms/FormPersonData";
import { FormAddress } from "components/Forms/FormAddress";
import { FormPassport } from "components/Forms/FormPassport";
import { validateFormsAddAdministrator } from "commonsFiles/validateForms/validateFormsAddAdministrator";
import { fetchPostAdministrator } from "redux/middlewares/middlewaresPanelSuperAdministrator/fetchAdministratorDB/fetchNewAdministrator";
import { fetchUpdateAdministrator } from "redux/middlewares/middlewaresPanelSuperAdministrator/fetchAdministratorDB/fetchUpdateAdministrator";
import { useSelector, useDispatch } from "react-redux";
import { exit_edit_mode, on_edit_mode } from "redux/actions/createActions";
import { useNavigate, useParams } from "react-router-dom";
import { fetchAdministratorById } from "redux/middlewares/middlewaresPanelSuperAdministrator/fetchAdministratorDB/fetchAdministratorById";

const AddNewAdministratorPage = () => {
  const { selectStaff } = useSelector((state) => state?.stuffReducer);

  const errorMassage =
    "Не все поля со звездочкой заполнены или заполнены с ошибкой";
  const selectItem = selectStaff?.administratorPersonalData;
  const params = useParams();
  const dispatch = useDispatch();
  const [valueForm, setValueForm] = useState({});

  useEffect(() => {
    if (params.id) {
      dispatch(fetchAdministratorById(params.id));
      dispatch(on_edit_mode);
    } else {
      dispatch(exit_edit_mode());
    }
  }, []);

  const clearForms = ({ formAddress, formPassport, formPersonData }) => {
    if ((formAddress, formPassport, formPersonData)) {
      formPassport.resetFields();
      formAddress.resetFields();
      formPersonData.resetFields();
    }
  };
  const navigate = useNavigate();
  return (
    <div className="container-addDoctor-page">
      <Form.Provider
        onFormFinish={(name, { values, forms }) => {
          const { formAddress, formPassport, formPersonData } = forms;
          const valueUser = {
            personData: {
              ...formPersonData.getFieldsValue(),
              role: "administrator",
            },
            addressData: formAddress.getFieldsValue(),
            passportData: formPassport.getFieldsValue(),
          };
          if (validateFormsAddAdministrator(forms)) {
            Modal.error({
              title: "Ошибка",
              content: errorMassage,
            });
          } else {
            !params.id
              ? dispatch(fetchPostAdministrator(valueUser))
              : dispatch(fetchUpdateAdministrator(params.id, valueUser));
            clearForms({
              formAddress,
              formPassport,
              formPersonData,
            });
            navigate("/superAdministrator");
          }
        }}
        onFormChange={(name, { forms }) => {
          setValueForm({ ...valueForm, ...forms });
        }}
      >
        {params.id ? (
          selectStaff?.administratorPersonalData && (
            <div className="container-forms-addPatient">
              <div className="doctor-data">
                <FormPersonData selectItem={selectItem} />
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
            </div>
            <FormAddress />
            <FormPassport valueForm={valueForm} clearForms={clearForms} />
          </div>
        )}
      </Form.Provider>
    </div>
  );
};
export { AddNewAdministratorPage };
