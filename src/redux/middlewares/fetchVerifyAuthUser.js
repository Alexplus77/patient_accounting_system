import axios from "axios";
import { auth_user, log_out } from "redux/actions/createActions";
import { errorModal } from "../../components/Error/Error";

export const fetchVerifyAuthUser = () => (dispatch) => {
  axios
    .get(`${process.env.REACT_APP_URL}/verifyToken`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    })
    .then(({ data }) => {
      dispatch(auth_user(data));
    })
    .catch((e) => {
      // e.response.status === 403 && dispatch(log_out());
      errorModal(e);
    });
};
