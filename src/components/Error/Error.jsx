import { Modal } from "antd";
export const errorModal = (e) => {
  const errorMessage = () => e.response?.data.error || e.message;
  Modal.error({
    title: "Произошла ошибка!!!",
    content: errorMessage(),
  });
};
