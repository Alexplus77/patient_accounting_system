import React, { useEffect } from "react";

import { Form, Input, Button, Select, DatePicker } from "antd";

import moment from "moment";
import "./FormPassport.css";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useForm } from "antd/es/form/Form";

const FormPassport = ({ clearForms, valueForm, selectItem }) => {
  const {
    authUser: { role },
  } = useSelector((state) => state?.stuffReducer);
  const { onEditMode, selectedPatient } = useSelector(
    (state) => state.storeReducer
  );
  const [form] = useForm();
  const params = useParams();
  useEffect(() => {
    !params.id && form.resetFields();
  }, [params.id]);
  const dateOfIssue = selectItem?.passportData?.dateOfIssue;

  return (
    <div className="container-form-add">
      <h2 className="title-personData">Паспорт</h2>
      <Form
        form={form}
        className="form-passport"
        name="formPassport"
        initialValues={
          onEditMode
            ? {
                ...selectItem?.passportData,
                dateOfIssue: moment(dateOfIssue),
              }
            : { remember: true }
        }
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
        <Form.Item
          hidden={role !== "superAdmin"}
          label={<label>Логин</label>}
          name="login"
          rules={[
            { required: role === "superAdmin", message: "Не указали логин" },
          ]}
        >
          <Input style={{ fontSize: "16px" }} placeholder="Логин" />
        </Form.Item>
        <Form.Item
          hidden={role !== "superAdmin"}
          label={<label>Пароль</label>}
          name="password"
          rules={[
            { required: role === "superAdmin", message: "Не указали пароль" },
          ]}
        >
          <Input.Password style={{ fontSize: "16px" }} placeholder="Пароль" />
        </Form.Item>
        <Form.Item>
          <div className="btn-form-passport">
            <Button className={"btn"}>
              <Link to={-1}>Назад</Link>
            </Button>
            {onEditMode || (
              <Button
                onClick={() => clearForms(valueForm)}
                className="btn"
                htmlType={"button"}
              >
                Очистить форму
              </Button>
            )}
            <Button className="btn" htmlType={"submit"}>
              {onEditMode ? "Сохранить изменения" : "Отправить"}
            </Button>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};
export { FormPassport };
