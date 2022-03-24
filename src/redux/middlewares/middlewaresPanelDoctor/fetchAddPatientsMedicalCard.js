import axios from "axios";
import { errorModal } from "../../../components/Error/Error";
import { log_out } from "../../actions/createActions";

export const fetchAddPatientsMedicalCard = (data, id) => (dispatch) => {
  axios
    .post(`${process.env.REACT_APP_URL}/addPatientsMedicalCard${id}`, data, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    })
    .then(() => console.log())
    .catch((e) => {
      e.response.status === 403 && dispatch(log_out());
      errorModal(e);
    });
};
