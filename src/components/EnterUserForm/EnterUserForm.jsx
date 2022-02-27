import React from "react";
import { Form, Input, Select, Button } from "antd";
import "./EnterUserForm.css";

const EnterUserForm = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="container-form">
      <div className="background" />
      <Form
        className="form-enter-user"
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        layout="horizontal"
      >
        <Form.Item label={<label>Логин</label>} name={"name"}>
          <Input placeholder="Логин" />
        </Form.Item>
        <Form.Item label={<label>Выберите роль</label>} name="select-role">
          <Select placeholder="Select a option">
            <Select.Option value="superAdmin">
              Супер Администратор
            </Select.Option>
            <Select.Option value="admin"> Администратор</Select.Option>
            <Select.Option value="doctor">Врач</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label={<label>Пароль</label>} name={"password"}>
          <Input.Password placeholder="Пароль" />
        </Form.Item>
        <Form.Item>
          <div className="btn-group">
            <Button>Войти</Button>
            <Button>Регистрация</Button>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};

export { EnterUserForm };
