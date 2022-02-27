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
          rules={[{ required: true, message: "Не указали фамилию" }]}
          label={<label style={{ fontSize: "16px" }}>Фамилия</label>}
          name={"lastName"}
        >
          <Input style={{ fontSize: "16px" }} placeholder="Введите фамилию" />
        </Form.Item>
        <Form.Item
          label={<label style={{ fontSize: "16px" }}>Имя</label>}
          name={"name"}
          rules={[{ required: true, message: "Не указали фамилию" }]}
        >
          <Input style={{ fontSize: "16px" }} placeholder="Введите имя" />
        </Form.Item>
        <Form.Item
          label={<label style={{ fontSize: "16px" }}>Отчество</label>}
          name={"patronymic"}
        >
          <Input style={{ fontSize: "16px" }} placeholder="Введите отчество" />
        </Form.Item>
        <Form.Item
          label={<label style={{ fontSize: "16px" }}>Дата рождения</label>}
          name="dob"
          rules={[{ required: true, message: "Не указали дату рождения" }]}
        >
          <DatePicker style={{ width: "100%" }} />
        </Form.Item>
        <Form.Item
          label={<label style={{ fontSize: "16px" }}>Номер телефона</label>}
          name={"phone"}
          rules={[{ required: true, message: "Не указали номер телефона" }]}
        >
          <InputNumber
            style={{ fontSize: "16px" }}
            addonBefore={<i>+7</i>}
            type="number"
            placeholder="Введите номер телефона"
          />
        </Form.Item>
        <Form.Item
          label={<label style={{ fontSize: "16px" }}>Пол</label>}
          name={"sex"}
        >
          <Select style={{ fontSize: "16px" }}>
            <Select.Option value="Мужской">Мужской</Select.Option>
            <Select.Option value="Женский">Женский</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          label={<label style={{ fontSize: "16px" }}>Группа клиентов</label>}
          name={"group-client"}
        >
          <Select style={{ fontSize: "16px" }}>
            <Select.Option value="VIP">VIP</Select.Option>
            <Select.Option value="Проблемные">Проблемные</Select.Option>
            <Select.Option value="ОМС">ОМС</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          label={<label style={{ fontSize: "16px" }}>Врачи</label>}
          name={"doctor"}
        >
          <Select style={{ fontSize: "16px" }}>
            <Select.Option value={"Ковалев"}>Ковалев А.П.</Select.Option>
            <Select.Option value={"Левашова"}>Левашова А.В.</Select.Option>
            <Select.Option value={"Иванов И.И."}>Иванов И.И.</Select.Option>
          </Select>
        </Form.Item>
      </Form>
    </div>
  );
};
export { FormPassport };
