import axios from "axios";
import { errorModal } from "components/Error/Error";
import {
  fetch_doctorsAppointmentList,
  log_out,
} from "redux/actions/createActions";

export const fetchGetDoctorsAppointment = (login) => (dispatch) => {
  axios
    .get(`${process.env.REACT_APP_URL}/doctorsAppointmentList${login}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    })
    .then(({ data }) => dispatch(fetch_doctorsAppointmentList(data)))
    .catch((e) => {
      e.response.status === 403 && dispatch(log_out());
      errorModal(e);
    });
};
