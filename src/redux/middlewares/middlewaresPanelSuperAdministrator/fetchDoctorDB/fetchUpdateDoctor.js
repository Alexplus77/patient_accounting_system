import axios from "axios";
import { exit_edit_mode } from "redux/actions/createActions";
import { is_loading } from "redux/actions/createActions";
import { errorModal } from "components/Error/Error";

export const fetchUpdateDoctor = (id, newData) => (dispatch) => {
  dispatch(is_loading());
  axios
    .put(`${process.env.REACT_APP_URL}/updateDoctor${id}`, newData)
    .then(({ data }) => {
      dispatch(exit_edit_mode());
    })
    .catch((e) => errorModal(e));
};
