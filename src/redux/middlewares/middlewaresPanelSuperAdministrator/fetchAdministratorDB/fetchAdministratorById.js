import axios from "axios";
import { fetch_selected_stuff, save_error } from "redux/actions/createActions";
import { is_loading } from "redux/actions/createActions";
import { errorModal } from "components/Error/Error";

export const fetchAdministratorById = (id) => (dispatch) => {
  dispatch(is_loading());
  axios
    .get(`${process.env.REACT_APP_URL}/administratorsList${id}`)
    .then(({ data }) => {
      dispatch(fetch_selected_stuff(data));
    })
    .catch((e) => errorModal(e));
};
