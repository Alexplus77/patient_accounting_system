import axios from "axios";
import { fetch_selected_stuff, log_out } from "redux/actions/createActions";
import { errorModal } from "components/Error/Error";

export const fetchDeleteDoctor = (id) => (dispatch) => {
  axios
    .delete(`${process.env.REACT_APP_URL}/deleteDoctor${id}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    })
    .then(({ data }) => dispatch(fetch_selected_stuff(data)))
    .catch((e) => {
      // e.response.status === 403 && dispatch(log_out());
      errorModal(e);
    });
};
