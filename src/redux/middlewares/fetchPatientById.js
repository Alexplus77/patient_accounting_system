import axios from "axios";
import { fetch_selected_patient } from "redux/actions/createActions";

export const fetchPatientById = (id) => (dispatch) => {
  axios
    .get(`http://localhost:8080/patientList${id}`)
    .then(({ data }) => {
      // console.log(data);
      dispatch(fetch_selected_patient(data));
    })
    .catch((e) => console.log(e));
};
