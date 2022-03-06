import axios from "axios";
import { fetchNewPatient } from "redux/actions/createActions";
import { is_loading } from "redux/actions/createActions";

export const fetchPostPatient = (data) => (dispatch) => {
  dispatch(is_loading());
  axios
    .post(`${process.env.REACT_APP_URL}/newPatient`, data)
    .then(({ data }) => dispatch(fetchNewPatient()))
    .catch((e) => console.log(e));
};
