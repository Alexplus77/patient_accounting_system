import axios from "axios";
import {
  auth_user,
  fetch_selected_patient,
  log_out,
} from "redux/actions/createActions";
import { errorModal } from "components/Error/Error";

export const fetchDeletePatient = (id) => (dispatch) => {
  axios
    .delete(`${process.env.REACT_APP_URL}/delete${id}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    })
    .then(({ data }) => {
      dispatch(fetch_selected_patient(data));
    })
    .catch((e) => {
      e.response.status === 403 && dispatch(log_out());
      errorModal(e);
    });
};
