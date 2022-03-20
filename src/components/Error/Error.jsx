import { Modal } from "antd";

export const errorModal = (e) => {
  e.response.status === 403 && localStorage.removeItem("token");
  const errorMessage = () => e.response?.data.error || e.message;
  Modal.error({
    title: "Произошла ошибка!!!",
    content: errorMessage(),
  });
};
