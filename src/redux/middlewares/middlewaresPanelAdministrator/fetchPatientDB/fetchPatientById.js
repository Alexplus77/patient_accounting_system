import axios from "axios";
import { fetch_selected_patient } from "redux/actions/createActions";
import { is_loading } from "redux/actions/createActions";
import { errorModal } from "components/Error/Error";

export const fetchPatientById = (id) => (dispatch) => {
  dispatch(is_loading());
  axios
    .get(`${process.env.REACT_APP_URL}/patientList${id}`)
    .then(({ data }) => {
      dispatch(fetch_selected_patient(data));
    })
    .catch((e) => errorModal(e));
};
