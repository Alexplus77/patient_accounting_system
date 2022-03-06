import axios from "axios";
import { fetchPatientList } from "redux/actions/createActions";
import { is_loading } from "redux/actions/createActions";

export const fetchGetPatientList = () => (dispatch) => {
  dispatch(is_loading());
  axios
    .get(`${process.env.REACT_APP_URL}/patientList`)
    .then(({ data }) => {
      dispatch(fetchPatientList(data));
    })
    .catch((e) => console.log(e));
};
