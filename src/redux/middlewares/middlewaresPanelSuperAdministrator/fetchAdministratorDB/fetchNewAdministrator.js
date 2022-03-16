import axios from "axios";
import { fetchNewAdministrator } from "redux/actions/createActions";
import { is_loading } from "redux/actions/createActions";
import { errorModal } from "components/Error/Error";

export const fetchPostAdministrator = (data) => (dispatch) => {
  dispatch(is_loading());
  axios
    .post(`${process.env.REACT_APP_URL}/newAdministrator`, data)
    .then(({ data }) => {
      dispatch(fetchNewAdministrator());
    })
    .catch((e) => {
      console.log(e);
      errorModal(e);
    });
};
