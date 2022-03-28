import axios from "axios";
import { auth_user } from "redux/actions/createActions";
import { errorModal } from "components/Error/Error";

export const fetchAuthUser = (dataUser) => (dispatch) => {
  axios
    .post(`${process.env.REACT_APP_URL}/authUser`, dataUser)
    .then(({ data }) => {
      console.log(data);
      localStorage.setItem("token", data.token);
      dispatch(auth_user(data));
    })
    .catch((e) => errorModal(e));
};
