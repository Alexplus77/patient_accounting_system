import axios from "axios";
import { fetch_selected_patient } from "../actions/createActions";

export const fetchDeletePatient = (id) => (dispatch) => {
  axios
    .delete(`http://localhost:8080/delete${id}`)
    .then(({ data }) => dispatch(fetch_selected_patient(data)))
    .catch((e) => console.log(e));
};
