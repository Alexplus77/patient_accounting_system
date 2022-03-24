import axios from "axios";
import {
  fetchPatientList,
  auth_user,
  is_loading,
} from "redux/actions/createActions";
import { log_out } from "redux/actions/createActions";
import { errorModal } from "components/Error/Error";
import { Result } from "antd";

export const fetchGetPatientList = () => (dispatch) => {
  dispatch(is_loading());
  axios
    .get(`${process.env.REACT_APP_URL}/patientList`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    })
    .then(({ data }) => {
      dispatch(fetchPatientList(data));
    })
    .catch((e) => {
      e.response.status === 403 && dispatch(log_out());
      errorModal(e);
    });
};
