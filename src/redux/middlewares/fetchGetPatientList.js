import axios from "axios";
import { fetchPatientList } from "redux/actions/createActions";
import { is_loading } from "redux/actions/createActions";
import { save_error } from "redux/actions/createActions";
import { Modal } from "antd";

export const fetchGetPatientList = () => (dispatch) => {
  dispatch(is_loading());
  axios
    .get(`${process.env.REACT_APP_URL}/patientList`)
    .then(({ data }) => {
      dispatch(fetchPatientList(data));
    })
    .catch((e) => {
      Modal.error({
        title: "Ошибка",
        content: e.message,
      });
    });
};
