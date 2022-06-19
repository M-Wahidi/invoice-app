import React from "react";
import useWindowDimensions from "../../CustomHooks/useWindowDimensions";
import { ThemeFunc } from "../../Context/ThemeContext";

function FilterInvoice({ setFilterItem }) {
  const { width } = useWindowDimensions();
  const { theme } = ThemeFunc();
  return (
    <div>
      <div
        style={{
          width: `${width < 700 ? "110px" : "150px"}`,
          position: "relative",
        }}
      >
        <select
          onChange={(e) => setFilterItem(e.target.value)}
          style={{
            border: "none",
            background: `${theme ? "#F8F8FB" : "#141625"}`,
            fontSize: "1rem",
            width: "100%",
            color: `${theme ? " #333" : "#fff"}`,
            position: "relative",
            outline: "none",
          }}
        >
          <option value="">
            {width < 700 ? "Filter" : "Filter By Status"}
          </option>
          <option value="Paid">Paid</option>
          <option value="Pending">Pending</option>
          <option value="Draft">Draft</option>
        </select>
      </div>
    </div>
  );
}

export default FilterInvoice;
