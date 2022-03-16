import React, { useEffect } from "react";
import "./FormDoctorData.css";
import { Form, Input, Select } from "antd";
import moment from "moment";
import { useParams } from "react-router-dom";
import { useForm } from "antd/es/form/Form";

const FormDoctorData = ({ selectItem }) => {
  const params = useParams();
  const [form] = useForm();
  useEffect(() => {
    !params.id && form.resetFields();
  }, [params.id]);
  return (
    <div className="container-doctor-data">
      <Form
        form={form}
        className="form-enter-user"
        name="formDoctorData"
        initialValues={
          params.id
            ? {
                ...selectItem?.personData,
              }
            : { remember: true }
        }
        autoComplete="off"
      >
        <Form.Item
          label={<label>Специальность</label>}
          name={"specialization"}
          rules={[{ required: true, message: "Не указали специальность" }]}
        >
          <Select placeholder="Специальность">
            <Select.Option value="Терапевт">Терапевт</Select.Option>
            <Select.Option value="Хирург">Хирург</Select.Option>
            <Select.Option value="Ортопед">Ортопед</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          label={<label>Серия и номер диплома</label>}
          name={"numberOfDiploma"}
          rules={[{ required: true, message: "Не указали номер диплома" }]}
        >
          <Input placeholder="Серия и номер диплома" />
        </Form.Item>
      </Form>
    </div>
  );
};

export { FormDoctorData };
