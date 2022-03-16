import axios from "axios";
import { fetchNewDoctor } from "redux/actions/createActions";
import { is_loading } from "redux/actions/createActions";
import { errorModal } from "components/Error/Error";

export const fetchPostDoctor = (data) => (dispatch) => {
  dispatch(is_loading());
  axios
    .post(`${process.env.REACT_APP_URL}/newDoctor`, data)
    .then(({ data }) => {
      dispatch(fetchNewDoctor());
    })
    .catch((e) => {
      console.log(e);
      errorModal(e);
    });
};
