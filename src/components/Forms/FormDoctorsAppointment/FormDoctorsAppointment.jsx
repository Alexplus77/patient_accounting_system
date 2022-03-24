import React from "react";
import { Form, Modal, Select, DatePicker, message } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { is_form_visible } from "redux/actions/createActions";
import { fetchAddDoctorsAppointment } from "redux/middlewares/middlewaresPanelAdministrator/fetchAddDoctorsAppointment";

const FormDoctorsAppointment = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const { doctorsList } = useSelector((state) => state?.stuffReducer);
  const { selectedPatient, formIsVisible } = useSelector(
    (state) => state?.storeReducer
  );
  console.log(selectedPatient.id);
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
            console.log({ ...values, patientData: selectedPatient.id });
            dispatch(
              fetchAddDoctorsAppointment({
                ...values,
                patientData: selectedPatient.id,
              })
            );
            message.success("Пациент успешно записан на прием к врачу ");
            dispatch(is_form_visible(false));
            form.resetFields();
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
            {doctorsList.map(
              ({ _id, doctorPersonalData: { personData, passportData } }) => (
                <Select.Option key={_id} value={_id}>
                  {personData.lastName} {personData.name}
                </Select.Option>
              )
            )}
          </Select>
        </Form.Item>
        <Form.Item
          name="dateAppointment"
          label="Выберите дату и время"
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
