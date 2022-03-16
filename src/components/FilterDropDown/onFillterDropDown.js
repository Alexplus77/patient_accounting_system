import { Button, Input } from "antd";
import React from "react";

export const onFilterDropDown = ({
  setSelectedKeys,
  selectedKeys,
  confirm,
  clearFilters,
}) => {
  return (
    <div className={"btns-search"}>
      <Input
        autoFocus
        onChange={(e) => {
          setSelectedKeys(e.target.value.trim() ? [e.target.value] : []);
          confirm({ closeDropdown: false });
        }}
        value={selectedKeys[0]}
        onPressEnter={() => {
          confirm();
        }}
        onBlur={() => {
          confirm();
        }}
        placeholder={"Поиск"}
      />
      <Button danger onClick={() => clearFilters()}>
        Clear
      </Button>
    </div>
  );
};
