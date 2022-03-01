import axios from "axios";
import { fetchPatientList } from "redux/actions/createActions";

export const fetchGetPatientList = () => (dispatch) => {
  axios
    .get("http://localhost:8080/patientList")
    .then(({ data }) => {
      dispatch(fetchPatientList(data));
    })
    .catch((e) => console.log(e));
};
