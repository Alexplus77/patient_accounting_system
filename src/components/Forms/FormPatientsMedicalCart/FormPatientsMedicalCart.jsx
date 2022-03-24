import React, { useEffect } from "react";
import { Button, Form, Input, Modal } from "antd";
import "./FormPatientsMedicalCart.css";
import { useNavigate, useParams } from "react-router-dom";
import { fetchAddPatientsMedicalCard } from "redux/middlewares/middlewaresPanelDoctor/fetchAddPatientsMedicalCard";
import { is_form_visible } from "redux/actions/createActions";
import { format } from "date-fns";
import { useSelector, useDispatch } from "react-redux";
import { resetFirstInputPolyfill } from "web-vitals/dist/modules/lib/polyfills/firstInputPolyfill";
import { useForm } from "antd/es/form/Form";

export const FormPatientsMedicalCart = ({ note }) => {
  const { selectedPatient, formIsVisible } = useSelector(
    (state) => state?.storeReducer
  );
  const {
    authUser: { dataUser },
  } = useSelector((state) => state?.stuffReducer);
  const dispatch = useDispatch();
  // console.log(selectedPatient.patientsMedicalCart);
  const navigate = useNavigate();
  const { id } = useParams();
  const onFinish = (values) => {
    const data = {
      ...values,
      date: new Date().toISOString(),
      doctorId: dataUser.id,
    };
    dispatch(fetchAddPatientsMedicalCard(data, selectedPatient?._id));
    dispatch(is_form_visible(false));
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Modal
      visible={formIsVisible}
      onOk={() => dispatch(is_form_visible(false))}
      onCancel={() => dispatch(is_form_visible(false))}
      width={"fit-content"}
    >
      <Form
        className="form-patientMedicalCart"
        name={"FormPatientsMedicalCart"}
        layout={"horizontal"}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        initialValues={note}
      >
        <Form.Item
          label={<label>Жалобы</label>}
          name="complaints"
          rules={[
            {
              required: true,
              message: "Напишите жалобы пациента!",
            },
          ]}
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item
          label={<label>Локальный статус</label>}
          name="localStatus"
          rules={[
            {
              required: true,
              message: "Напишите локальный статус!",
            },
          ]}
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item label={<label>Лечение</label>} name="treatment">
          <Input.TextArea />
        </Form.Item>
        <Form.Item label={<label>Рекомендации</label>} name="recommendation">
          <Input.TextArea />
        </Form.Item>
        <Form.Item>
          <div className="btn-group">
            <Button className="btn" htmlType={"submit"}>
              Отправить
            </Button>
            <Button className="btn" htmlType={"reset"}>
              Очистить поля
            </Button>
          </div>
        </Form.Item>
      </Form>
    </Modal>
  );
};
