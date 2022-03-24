import axios from "axios";
import {
  fetch_selected_stuff,
  log_out,
  save_error,
} from "redux/actions/createActions";
import { is_loading } from "redux/actions/createActions";
import { errorModal } from "components/Error/Error";

export const fetchDoctorById = (id) => (dispatch) => {
  dispatch(is_loading());
  axios
    .get(`${process.env.REACT_APP_URL}/doctorsList${id}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    })
    .then(({ data }) => {
      dispatch(fetch_selected_stuff(data));
    })
    .catch((e) => {
      e.response.status === 403 && dispatch(log_out());
      errorModal(e);
    });
};
