import React, { useEffect } from "react";

import {
  Form,
  Input,
  Button,
  Typography,
  Select,
  DatePicker,
  InputNumber,
} from "antd";
import "./FormAddress.css";
import { useDispatch, useSelector } from "react-redux";
import { on_edit_mode } from "../../redux/actions/createActions";
import { fetchPatientById } from "../../redux/middlewares/fetchPatientById";
import { useParams } from "react-router-dom";

const FormAddress = () => {
  const { onEditMode, selectedPatient } = useSelector(
    (state) => state.storeReducer
  );

  return (
    <div className="container-formAddress">
      <div className="background-form" />
      <h2 className="title">Адрес</h2>
      <Form
        className="form-address"
        name="formAddress"
        initialValues={selectedPatient.patientPersonalData?.addressData}
        autoComplete="off"
        layout="horizontal"
      >
        <Form.Item label={<label>Индекс</label>} name={"index"}>
          <Input type={"number"} placeholder="Введите индекс" />
        </Form.Item>
        <Form.Item label={<label>Страна</label>} name={"country"}>
          <Input placeholder="Страна" />
        </Form.Item>
        <Form.Item label={<label>Область</label>} name={"region"}>
          <Input placeholder="Область" />
        </Form.Item>
        <Form.Item
          label={<label>Город</label>}
          name="city"
          rules={[{ required: true, message: "Не указали город проживания" }]}
        >
          <Input placeholder="Город" />
        </Form.Item>
        <Form.Item label={<label>Улица</label>} name={"street"}>
          <Input placeholder="Улица" />
        </Form.Item>
        <Form.Item label={<label>Номер дома</label>} name={"numberHouse"}>
          <InputNumber type={"number"} placeholder="Номер дома" />
        </Form.Item>
      </Form>
    </div>
  );
};
export { FormAddress };
