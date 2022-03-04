import axios from "axios";
import { fetch_selected_patient } from "redux/actions/createActions";

export const fetchPatientById = (id) => (dispatch) => {
  axios
    .get(`${process.env.REACT_APP_URL}/patientList${id}`)
    .then(({ data }) => {
      dispatch(fetch_selected_patient(data));
    })
    .catch((e) => console.log(e));
};
