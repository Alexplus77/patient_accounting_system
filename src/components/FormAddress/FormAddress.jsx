import React from "react";

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

const FormAddress = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="container-formAddress">
      <div className="background-form" />
      <h2 className="title">Адрес</h2>
      <Form
        className="form-address"
        name="formAddress"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        layout="horizontal"
      >
        <Form.Item label={<label>Индекс</label>} name={"index"}>
          <Input type={"number"} placeholder="Введите индекс" />
        </Form.Item>
        <Form.Item label={<label>Страна</label>} name={"country"}>
          <Input placeholder="Страна" />
        </Form.Item>
        <Form.Item label={<label>Область</label>} name={"aria"}>
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
        <Form.Item label={<label>Номер дома</label>} name={"number"}>
          <InputNumber type={"number"} placeholder="Номер дома" />
        </Form.Item>
      </Form>
    </div>
  );
};
export { FormAddress };
