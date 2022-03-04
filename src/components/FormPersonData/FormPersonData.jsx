import { Button, DatePicker, Form, Input, InputNumber, Select } from "antd";
import React, { useEffect, useRef } from "react";
import "./FormPersonData.css";
import { useSelector } from "react-redux";
import { initialValueDefault } from "commonsFiles/initialValueDefault";
import moment from "moment";

const FormPersonData = () => {
  const { onEditMode, selectedPatient } = useSelector(
    (state) => state.storeReducer
  );
  const dateOfBirth =
    selectedPatient.patientPersonalData?.personData.dateOfBirth;
  return (
    <div className="container-form-addPatient">
      <div className="background-form" />
      <h2 className="title">Личные данные</h2>
      <Form
        className="form-enter-user"
        name="formPersonData"
        initialValues={{
          ...selectedPatient.patientPersonalData?.personData,
          dateOfBirth: moment(dateOfBirth),
        }}
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
          <Input style={{ fontSize: "16px" }} placeholder="Введите отчество" />
        </Form.Item>
        <Form.Item
          label={<label>Дата рождения</label>}
          name="dateOfBirth"
          rules={[{ required: true, message: "Не указали дату рождения" }]}
        >
          <DatePicker style={{ width: "100%" }} />
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
