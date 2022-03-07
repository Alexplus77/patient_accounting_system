import axios from "axios";
import { fetch_selected_patient } from "redux/actions/createActions";
import { save_error } from "redux/actions/createActions";
import { Modal } from "antd";

export const fetchDeletePatient = (id) => (dispatch) => {
  axios
    .delete(`${process.env.REACT_APP_URL}/delete${id}`)
    .then(({ data }) => dispatch(fetch_selected_patient(data)))
    .catch((e) =>
      Modal.error({
        title: "Ошибка",
        content: e.message,
      })
    );
};
