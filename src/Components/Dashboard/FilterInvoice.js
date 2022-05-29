import React from "react";
import useWindowDimensions from "../../CustomHooks/useWindowDimensions";
import { ThemeFunc } from "../../Context/ThemeContext";

function FilterInvoice() {
  const { width } = useWindowDimensions();
  const { theme } = ThemeFunc();

  return (
    <div>
      <div
        style={{
          width: `${width < 900 ? "110px" : "150px"}`,
          position: "relative",
        }}
      >
        <select
          style={{
            border: "none",
            background: `${theme ? "#fff" : "#141625"}`,
            fontSize: "1rem",
            width: "100%",
            color: `${theme ? " #333" : "#fff"}`,
            position: "relative",
            outline: "none",
          }}
        >
          <option value="">
            {width < 900 ? "Filter" : "Filtery By Status"}
          </option>
          <option value="Paid">Paid</option>
          <option value="Pendeing">Pendeing</option>
          <option value="Draft">Draft</option>
        </select>
      </div>
    </div>
  );
}

export default FilterInvoice;
