import axios from "axios";
import { fetchAdministratorsList } from "redux/actions/createActions";
import { is_loading } from "redux/actions/createActions";
import { errorModal } from "components/Error/Error";

export const fetchGetAdministratorsList = () => (dispatch) => {
  dispatch(is_loading());
  axios
    .get(`${process.env.REACT_APP_URL}/administratorsList`)
    .then(({ data }) => {
      dispatch(fetchAdministratorsList(data));
    })
    .catch((e) => {
      errorModal(e);
    });
};
