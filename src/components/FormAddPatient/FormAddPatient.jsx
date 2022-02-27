import React from "react";
import { Form, Input, Button, Checkbox, Select, DatePicker } from "antd";
import "./FormAddPatient.css";
import { Link } from "react-router-dom";

const FormAddPatient = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="container-form-addPatient">
      <div className="background-form" />
      <Form
        className="form-enter-user"
        name="form-addPatient"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        layout="horizontal"
      >
        <Form.Item
          rules={[{ required: true, message: "Не указали фамилию" }]}
          label={<label>Фамилия</label>}
          name={"lastName"}
        >
          <Input placeholder="Введите фамилию" />
        </Form.Item>
        <Form.Item
          label={<label>Имя</label>}
          name={"name"}
          rules={[{ required: true, message: "Не указали фамилию" }]}
        >
          <Input placeholder="Введите имя" />
        </Form.Item>
        <Form.Item label={<label>Отчество</label>} name={"patronymic"}>
          <Input placeholder="Введите отчество" />
        </Form.Item>
        <Form.Item
          label={<label>Дата рождения</label>}
          name="dob"
          rules={[{ required: true, message: "Не указали дату рождения" }]}
        >
          <DatePicker />
        </Form.Item>
        <Form.Item
          label={<label>Номер телефона</label>}
          name={"phone"}
          rules={[{ required: true, message: "Не указали номер телефона" }]}
        >
          <Input type="number" placeholder="Введите номер телефона" />
        </Form.Item>
        <Form.Item label={<label>Пол</label>} name={"sex"}>
          <Select>
            <Select.Option value="Мужской">Мужской</Select.Option>
            <Select.Option value="Женский">Женский</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label={<label>Группа клиентов</label>} name={"group-client"}>
          <Select>
            <Select.Option value="VIP">VIP</Select.Option>
            <Select.Option value="Проблемные">Проблемные</Select.Option>
            <Select.Option value="ОМС">ОМС</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label={<label>Врачи</label>} name={"doctor"}>
          <Select>
            <Select.Option value={"Ковалев"}>Ковалев А.П.</Select.Option>
            <Select.Option value={"Левашова"}>Левашова А.В.</Select.Option>
            <Select.Option value={"Иванов И.И."}>Иванов И.И.</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit">Регистрация</Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export { FormAddPatient };
