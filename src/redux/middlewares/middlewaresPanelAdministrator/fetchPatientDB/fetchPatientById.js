import axios from "axios";
import {
  auth_user,
  fetch_selected_patient,
  log_out,
} from "redux/actions/createActions";
import { is_loading } from "redux/actions/createActions";
import { errorModal } from "components/Error/Error";

export const fetchPatientById = (id) => (dispatch) => {
  dispatch(is_loading());
  axios
    .get(`${process.env.REACT_APP_URL}/patientList${id}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    })
    .then(({ data }) => {
      dispatch(fetch_selected_patient(data));
    })
    .catch((e) => {
      //e.response.status === 403 && dispatch(log_out());
      errorModal(e);
    });
};
