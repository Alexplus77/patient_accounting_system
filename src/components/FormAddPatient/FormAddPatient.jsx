import React from "react";
import { FormAddress } from "components/FormAddress";
import { FormPassport } from "components/FormPassport";
import {
  Form,
  Input,
  Button,
  Typography,
  Select,
  DatePicker,
  InputNumber,
} from "antd";
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
    <Form.Provider
      onFormFinish={(name, { values, forms }) => {
        const { formAddress } = forms;
        const valueUser = formAddress.getFieldValue();
        console.log(valueUser);
        if (name === "userForm") {
          const { basicForm } = forms;
          const users = basicForm.getFieldValue("users") || [];
          basicForm.setFieldsValue({ users: [...users, values] });
          // setVisible(false);
        }
      }}
    >
      <div className="container-forms-addPatient">
        <div className="container-form-addPatient">
          <div className="background-form" />
          <h2 className="title">Паспортные данные</h2>
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
              <Input
                style={{ fontSize: "16px" }}
                placeholder="Введите отчество"
              />
            </Form.Item>
            <Form.Item
              label={<label>Дата рождения</label>}
              name="dob"
              rules={[{ required: true, message: "Не указали дату рождения" }]}
            >
              <DatePicker style={{ width: "100%" }} />
            </Form.Item>
            <Form.Item
              label={<label>Номер телефона</label>}
              name={"phone"}
              rules={[{ required: true, message: "Не указали номер телефона" }]}
            >
              <InputNumber
                addonBefore={<i>+7</i>}
                type="number"
                placeholder="Введите номер телефона"
              />
            </Form.Item>
            <Form.Item label={<label>Пол</label>} name={"sex"}>
              <Select>
                <Select.Option value="Мужской">Мужской</Select.Option>
                <Select.Option value="Женский">Женский</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item
              label={<label>Группа клиентов</label>}
              name={"group-client"}
            >
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
              <Button className="btn-submit" htmlType={"submit"}>
                Отправить
              </Button>
            </Form.Item>
          </Form>
        </div>
        <FormAddress />
        <FormPassport />
      </div>
    </Form.Provider>
  );
};
export { FormAddPatient };
