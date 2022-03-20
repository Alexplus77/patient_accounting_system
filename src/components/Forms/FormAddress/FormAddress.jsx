import React, { useEffect } from "react";

import { Form, Input, InputNumber } from "antd";
import "./FormAddress.css";
import { useDispatch, useSelector } from "react-redux";
import { initialValueDefault } from "commonsFiles/initialValueDefault";
import { useForm } from "antd/es/form/Form";
import { useParams } from "react-router-dom";

const FormAddress = ({ selectItem }) => {
  const { onEditMode } = useSelector((state) => state.storeReducer);
  const [form] = useForm();
  const params = useParams();
  useEffect(() => {
    !params.id && form.resetFields();
  }, [params.id]);
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
    <div className="container-form-add">
      <h2 className="title-personData">Адрес</h2>
      <Form
        form={form}
        className="form-personData"
        name="formAddress"
        initialValues={
          onEditMode ? selectItem?.addressData : initialValueDefault
        }
        autoComplete="off"
        layout="horizontal"
      >
        <Form.Item label={<label>Индекс</label>} name={"index"}>
          <Input type={"number"} placeholder="Введите индекс" />
        </Form.Item>
        <Form.Item label={<label>Страна</label>} name={"country"}>
          <Input placeholder="Страна" />
        </Form.Item>
        <Form.Item label={<label>Область</label>} name={"region"}>
          <Input placeholder="Область" />
        </Form.Item>
        <Form.Item label={<label>Город</label>} name="city" rules={rulesForm}>
          <Input placeholder="Город" />
        </Form.Item>
        <Form.Item label={<label>Улица</label>} name={"street"}>
          <Input placeholder="Улица" />
        </Form.Item>
        <Form.Item label={<label>Номер дома</label>} name={"numberHouse"}>
          <InputNumber type={"number"} placeholder="Номер дома" />
        </Form.Item>
      </Form>
    </div>
  );
};
export { FormAddress };
