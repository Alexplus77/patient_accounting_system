import axios from "axios";
import { errorModal } from "components/Error/Error";
import { log_out } from "../../actions/createActions";

export const fetchAddDoctorsAppointment = (dataPost) => (dispatch) => {
  axios
    .post(`${process.env.REACT_APP_URL}/addDoctorsAppointment`, dataPost, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    })
    .then()
    .catch((e) => {
      e.response.status === 403 && dispatch(log_out());
      errorModal(e);
    });
};
