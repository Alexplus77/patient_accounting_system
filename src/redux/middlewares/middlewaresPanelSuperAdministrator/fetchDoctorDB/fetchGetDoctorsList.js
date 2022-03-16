import axios from "axios";
import { fetchDoctorsList } from "redux/actions/createActions";
import { is_loading } from "redux/actions/createActions";
import { errorModal } from "components/Error/Error";

export const fetchGetDoctorsList = () => (dispatch) => {
  dispatch(is_loading());
  axios
    .get(`${process.env.REACT_APP_URL}/doctorsList`)
    .then(({ data }) => {
      dispatch(fetchDoctorsList(data));
    })
    .catch((e) => {
      errorModal(e);
    });
};
