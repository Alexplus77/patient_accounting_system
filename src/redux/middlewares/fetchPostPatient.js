import axios from "axios";
import { fetchNewPatient } from "redux/actions/createActions";

export const fetchPostPatient = (data) => (dispatch) => {
  axios
    .post("http://localhost:8080/newPatient", data)
    .then(({ data }) => dispatch(fetchNewPatient()))
    .catch((e) => console.log(e));
};
