import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";

export const RequiredAuth = (props) => {
  const { isAuth, authUser } = useSelector((state) => state.stuffReducer);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (isAuth === null && token) return;
    !authUser.role && navigate("/");
  }, []);
  console.log(isAuth);
  return props.children;
};
