import axios from "axios";
import { fetchAdministratorsList, log_out } from "redux/actions/createActions";
import { is_loading } from "redux/actions/createActions";
import { errorModal } from "components/Error/Error";

export const fetchGetAdministratorsList = () => (dispatch) => {
  dispatch(is_loading());
  axios
    .get(`${process.env.REACT_APP_URL}/administratorsList`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    })
    .then(({ data }) => {
      dispatch(fetchAdministratorsList(data));
    })
    .catch((e) => {
      // e.response.status === 403 && dispatch(log_out());
      errorModal(e);
    });
};
