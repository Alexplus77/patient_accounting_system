import axios from "axios";
import { fetchNewAdministrator, log_out } from "redux/actions/createActions";
import { is_loading } from "redux/actions/createActions";
import { errorModal } from "components/Error/Error";
import { message } from "antd";
export const fetchPostAdministrator = (data) => (dispatch) => {
  dispatch(is_loading());
  axios
    .post(`${process.env.REACT_APP_URL}/newAdministrator`, data, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    })
    .then(({ data }) => {
      message?.success("Вы успешно добавили администратора в базу данных");
      dispatch(fetchNewAdministrator());
    })
    .catch((e) => {
      e.response.status === 403 && dispatch(log_out());
      errorModal(e);
    });
};
