import React from "react";
import { Form, Input, Select, Button } from "antd";
import "./EnterUserForm.css";
import { Link } from "react-router-dom";

const EnterUserForm = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const rulesForm = [
    { required: true },
    { whitespace: true },
    {
      validator: (_, value) => {
        if (value.includes(" ")) {
          return Promise.reject("Поле не может содержать пробел");
        }
        return Promise.resolve();
      },
    },
  ];
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
        <Form.Item rules={rulesForm} label={<label>Логин</label>} name={"name"}>
          <Input placeholder="Введите логин" />
        </Form.Item>
        <Form.Item
          rules={[{ required: true }]}
          label={<label>Выберите роль</label>}
          name="select-role"
        >
          <Select placeholder="Выберите роль">
            <Select.Option value="superAdmin">
              Супер Администратор
            </Select.Option>
            <Select.Option value="admin"> Администратор</Select.Option>
            <Select.Option value="doctor">Врач</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          rules={[
            { required: true },
            {
              validator: (_, value) => {
                if (value.includes(" ")) {
                  return Promise.reject("Поле не может содержать пробел");
                }
                return Promise.resolve();
              },
            },
            { min: 6 },
          ]}
          label={<label>Пароль</label>}
          name={"password"}
        >
          <Input.Password placeholder="Введите пароль" />
        </Form.Item>
        <Form.Item>
          <div className="btn-group">
            <Button>
              <Link to={"/administrator"}> Войти</Link>
            </Button>
            <Button>Регистрация</Button>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};

export { EnterUserForm };