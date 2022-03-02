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
import { Link } from "react-router-dom";

const FormPassport = ({ formsValue, clearForm }) => {
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
        name="formPassport"
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
            <Select.Option value={"Паспорт"}>Паспорт</Select.Option>
            <Select.Option value={"Свидетельство о рождении"}>
              Сертификат о рождении
            </Select.Option>
            <Select.Option value={"Водительское удостоверение"}>
              Водительское удостоверение
            </Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label={<label>Серия</label>} name={"seriesDocument"}>
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
        <Form.Item>
          <div className="btn-form-passport">
            <Button className={"btn"}>
              <Link to={"/administrator"}>Отмена</Link>
            </Button>
            <Button
              onClick={() => clearForm(formsValue)}
              className="btn"
              htmlType={"button"}
            >
              Очистить форму
            </Button>
            <Button className="btn" htmlType={"submit"}>
              Отправить
            </Button>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};
export { FormPassport };
