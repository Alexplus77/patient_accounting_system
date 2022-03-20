import React, { useEffect } from "react";
import { Form, Input, Select, Button, Modal } from "antd";
import "./EnterUserForm.css";
import { Link, useNavigate } from "react-router-dom";
import { fetchAuthUser } from "redux/middlewares/fetchAuthUser";
import { useDispatch, useSelector } from "react-redux";
import { QuestionCircleTwoTone } from "@ant-design/icons";

const EnterUserForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { authUser } = useSelector((state) => state?.stuffReducer);
  const handleHelp = () => {
    Modal.info({
      title: "По умолчанию логин и пароль",
      content: (
        <div className="modal-help">
          <strong>Роль супер Администратор</strong>
          <p className="text-help">
            <i>логин: superAdmin</i> <i>пароль: superAdmin</i>
          </p>
          <strong>Роль Администратор</strong>
          <p className="text-help">
            <i>логин: admin</i>
            <i>пароль: admin</i>
          </p>
          <strong>Роль Врач</strong>
          <p className="text-help">
            <i>логин: doctor</i>
            <i>пароль: doctor</i>
          </p>
        </div>
      ),
    });
  };
  const onFinish = (values) => {
    dispatch(fetchAuthUser(values));
  };
  useEffect(() => {
    authUser.path && navigate(authUser.path);
  }, [authUser]);

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
    <Form
      className="form-enter-user"
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      layout="horizontal"
    >
      <QuestionCircleTwoTone
        onClick={handleHelp}
        twoToneColor={" #a4a3a3"}
        className="icon-help"
      />
      <Form.Item rules={rulesForm} label={<label>Логин</label>} name={"name"}>
        <Input placeholder="Введите логин" />
      </Form.Item>
      <Form.Item
        rules={[{ required: true }]}
        label={<label>Выберите роль</label>}
        name="selectRole"
      >
        <Select placeholder="Выберите роль">
          <Select.Option value="superAdmin">Супер Администратор</Select.Option>
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
          { min: 5 },
        ]}
        label={<label>Пароль</label>}
        name={"password"}
      >
        <Input.Password placeholder="Введите пароль" />
      </Form.Item>
      <Form.Item style={{ justifySelf: "center", paddingTop: "10px" }}>
        <Button htmlType="submit">Войти</Button>
      </Form.Item>
    </Form>
  );
};

export { EnterUserForm };
