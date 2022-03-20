import React from "react";
import { Form, Modal, Select, DatePicker } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { is_form_visible } from "redux/actions/createActions";

const FormDoctorsAppointment = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const { doctorsList } = useSelector((state) => state?.stuffReducer);
  const { selectedPatient, formIsVisible } = useSelector(
    (state) => state?.storeReducer
  );

  return (
    <Modal
      visible={formIsVisible}
      title="Выберите дату и время"
      okText="Записать"
      cancelText="Выйти"
      onCancel={() => dispatch(is_form_visible(false))}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            //onCreate(values);
          })
          .catch((info) => {
            console.log("Validate Failed:", info);
          });
      }}
    >
      <Form
        form={form}
        layout="vertical"
        name="formDoctorsAppointment"
        initialValues={{
          modifier: "public",
        }}
      >
        <Form.Item
          name="selectDoctor"
          label="Выберите врача"
          rules={[
            {
              required: true,
              message: "Please input the title of collection!",
            },
          ]}
        >
          <Select>
            {doctorsList.map(({ _id, doctorPersonalData: { personData } }) => (
              <Select.Option key={_id} value={_id}>
                {personData.lastName} {personData.name}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item
          name="title"
          label="Title"
          rules={[
            {
              required: true,
              message: "Please input the title of collection!",
            },
          ]}
        >
          <DatePicker showTime format="YYYY-MM-DD HH:mm" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export { FormDoctorsAppointment };
