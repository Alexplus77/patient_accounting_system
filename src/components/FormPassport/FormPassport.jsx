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
import "./FormPassport.css";

const FormPassport = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="container-formPassport">
      <div className="background-form" />
      <h2 className="title">Паспорт</h2>
      <Form
        className="form-passport"
        name="form-passport"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        layout="horizontal"
      >
        <Form.Item
          rules={[{ required: true, message: "Не указали тип документа" }]}
          label={<label>Тип документа</label>}
          name={"documentType"}
        >
          <Select placeholder="Тип документа">
            <Select.Option value={"passport"}>Паспорт</Select.Option>
            <Select.Option value={"birth certificate"}>
              Сертификат о рождении
            </Select.Option>
            <Select.Option value={"driver's license"}>
              Водительское удостоверение
            </Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label={<label>Серия</label>} name={"series"}>
          <Input placeholder="Серия" />
        </Form.Item>
        <Form.Item label={<label>Номер</label>} name={"numberDoc"}>
          <Input placeholder="Номер" />
        </Form.Item>
        <Form.Item label={<label>Кем выдан</label>} name={"issuedByWhom"}>
          <Input placeholder="Кем выдан" />
        </Form.Item>
        <Form.Item
          label={<label>Дата выдачи</label>}
          name="dateOfIssue"
          rules={[{ required: true, message: "Не указали дату выдачи" }]}
        >
          <DatePicker style={{ width: "100%" }} />
        </Form.Item>
      </Form>
    </div>
  );
};
export { FormPassport };
