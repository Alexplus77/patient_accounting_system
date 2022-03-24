import { Modal } from "antd";

export const errorModal = (e) => {
  if (e.response.status === 403) {
    localStorage.removeItem("token");
  }
  const errorMessage = () => e.response?.data.error || e.message;
  return Modal.error({
    title: "Произошла ошибка!!!",
    content: errorMessage(),
  });
};
