import axios from "axios";

export const fetchPostPatient = (data) => (dispatch) => {
  axios
    .post("http://localhost:8080/addUsers", data)
    .then(({ data }) => console.log(data))
    .catch((e) => console.log(e));
};
