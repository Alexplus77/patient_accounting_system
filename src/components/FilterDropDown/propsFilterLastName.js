import { onFilterDropDown } from "./onFillterDropDown";
import { SearchOutlined } from "@ant-design/icons";
import React from "react";

export const propsFilterLastName = {
  filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) =>
    onFilterDropDown({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }),
  filterIcon: () => {
    return <SearchOutlined style={{ fontSize: "20px" }} />;
  },
  onFilter: (value, record) => {
    return (
      value &&
      [...record.personData.lastName.toLowerCase()]
        .slice(0, value.length)
        .includes(value.toLowerCase())
    );
  },
};
