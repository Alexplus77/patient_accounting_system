import axios from "axios";
import {
  exit_edit_mode,
  log_out,
  save_error,
} from "redux/actions/createActions";
import { is_loading } from "redux/actions/createActions";
import { errorModal } from "components/Error/Error";
import { message } from "antd";

export const fetchUpdateAdministrator = (id, newData) => (dispatch) => {
  dispatch(is_loading());
  axios
    .put(`${process.env.REACT_APP_URL}/updateAdministrator${id}`, newData, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    })
    .then(({ data }) => {
      message?.success("Данные успешно обновлены");
      dispatch(exit_edit_mode());
    })
    .catch((e) => {
      //e.response.status === 403 && dispatch(log_out());
      errorModal(e);
    });
};
