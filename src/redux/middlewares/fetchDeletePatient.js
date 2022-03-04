import axios from "axios";
import { fetch_selected_patient } from "../actions/createActions";

export const fetchDeletePatient = (id) => (dispatch) => {
  axios
    .delete(`${process.env.REACT_APP_URL}/delete${id}`)
    .then(({ data }) => dispatch(fetch_selected_patient(data)))
    .catch((e) => console.log(e));
};
