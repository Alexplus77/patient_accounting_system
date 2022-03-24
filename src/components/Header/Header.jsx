import React, { useEffect, useState } from "react";
import "./Header.css";
import { HeaderAdministrator } from "components/HeaderAdministrator";
import { HeaderSuperAdministrator } from "components/HeaderSuperAdministrator";
import { AuthUserCard } from "components/AuthUserCard";
import { useSelector } from "react-redux";
import { format } from "date-fns";
const Header = () => {
  const nowDate = format(new Date(), "dd.MM.yy HH.mm ");
  const [time, setTime] = useState(false);
  const [date, setDate] = useState(nowDate);
  const idTimer = setInterval(() => setTime(!time), 60000);

  useEffect(() => {
    setDate(nowDate);
    return () => clearInterval(idTimer);
  }, [time]);
  const {
    authUser: { role },
  } = useSelector((state) => state?.stuffReducer);

  return (
    <header className="header-container">
      <div className="logo-container">
        <i className="logo">Patient Accounting System</i>
        <div className="dateNow">{date}</div>
      </div>

      {role === "admin" && <HeaderAdministrator />}
      {role === "superAdmin" && <HeaderSuperAdministrator />}
      {role === "doctor" && <AuthUserCard />}
    </header>
  );
};

export { Header };
