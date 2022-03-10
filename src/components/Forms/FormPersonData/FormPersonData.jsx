import { Button, DatePicker, Form, Input, InputNumber, Select } from "antd";
import React, { useEffect, useRef } from "react";
import "./FormPersonData.css";
import { useSelector } from "react-redux";
import moment from "moment";

const FormPersonData = () => {
  const { onEditMode, selectedPatient, errors } = useSelector(
    (state) => state.storeReducer
  );
  const dateOfBirth =
    selectedPatient.patientPersonalData?.personData.dateOfBirth;

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
    <div className="container-form-addPatient">
      <div className="background-form" />
      <h2 className="title">Личные данные</h2>
      <Form
        className="form-enter-user"
        name="formPersonData"
        initialValues={
          onEditMode
            ? {
                ...selectedPatient.patientPersonalData?.personData,
                dateOfBirth: moment(dateOfBirth),
              }
            : { remember: true }
        }
        autoComplete="off"
        layout="horizontal"
      >
        <Form.Item
          rules={rulesForm}
          label={<label>Фамилия</label>}
          name={"lastName"}
        >
          <Input autoFocus placeholder="Введите фамилию" />
        </Form.Item>
        <Form.Item label={<label>Имя</label>} name={"name"} rules={rulesForm}>
          <Input placeholder="Введите имя" />
        </Form.Item>
        <Form.Item label={<label>Отчество</label>} name={"patronymic"}>
          <Input style={{ fontSize: "16px" }} placeholder="Введите отчество" />
        </Form.Item>
        <Form.Item
          label={<label>Дата рождения</label>}
          name="dateOfBirth"
          rules={[{ required: true, message: "Не указали дату рождения" }]}
        >
          <DatePicker
            style={{ width: "100%" }}
            format={["DD-MM-YYYY ", "DD-MM-YYYY "]}
          />
        </Form.Item>
        <Form.Item
          label={<label>Номер телефона</label>}
          name={"phoneNumber"}
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
        <Form.Item label={<label>Группа клиентов</label>} name={"groupClient"}>
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
      </Form>
    </div>
  );
};
export { FormPersonData };
