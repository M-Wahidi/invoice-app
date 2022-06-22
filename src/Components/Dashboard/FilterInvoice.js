import React from "react";
import useWindowDimensions from "../../CustomHooks/useWindowDimensions";
import { ThemeFunc } from "../../Context/ThemeContext";
import { useState } from "react";

function FilterInvoice({ setFilterItem }) {
  const { width } = useWindowDimensions();
  const { theme } = ThemeFunc();
  const [isOpen, setIsOpen] = useState(false);

  const handlOpenList = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <div>
      <div
        onClick={handlOpenList}
        className='test'
        style={{
          width: `${width < 700 ? "110px" : "150px"}`,
          position: "relative",
        }}
      >
        <select
          onChange={(e) => setFilterItem(e.target.value)}
          className='select-style'
          style={{
            border: "none",
            background: `${theme ? "#F8F8FB" : "#141625"}`,
            fontSize: "1rem",
            width: "100%",
            color: `${theme ? " #333" : "#fff"}`,
            position: "relative",
            outline: "none",
            cursor: "pointer",
            paddingTop: "5px",
          }}
        >
          <option value=''>{width < 700 ? "Filter" : "Filter By Status"}</option>
          <option value='Paid'>Paid</option>
          <option value='Pending'>Pending</option>
          <option value='Draft'>Draft</option>
        </select>
      </div>
    </div>
  );
}

export default FilterInvoice;
