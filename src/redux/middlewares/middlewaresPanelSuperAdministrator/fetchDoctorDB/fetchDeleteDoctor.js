import axios from "axios";
import { fetch_selected_stuff } from "redux/actions/createActions";
import { errorModal } from "components/Error/Error";

export const fetchDeleteDoctor = (id) => (dispatch) => {
  axios
    .delete(`${process.env.REACT_APP_URL}/deleteDoctor${id}`)
    .then(({ data }) => dispatch(fetch_selected_stuff(data)))
    .catch((e) => errorModal(e));
};
