import axios from "axios";
import { fetch_selected_patient } from "redux/actions/createActions";
import { errorModal } from "components/Error/Error";

export const fetchDeletePatient = (id) => (dispatch) => {
  axios
    .delete(`${process.env.REACT_APP_URL}/delete${id}`)
    .then(({ data }) => dispatch(fetch_selected_patient(data)))
    .catch((e) => errorModal(e));
};
