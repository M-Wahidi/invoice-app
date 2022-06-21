import React from "react";
import useWindowDimensions from "../../CustomHooks/useWindowDimensions";
import { ThemeFunc } from "../../Context/ThemeContext";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
function HomePageTitle({ invoiceLength, setSortInvoice, sortInvoice }) {
  const { width } = useWindowDimensions();
  const { theme } = ThemeFunc();

  return (
    <div
      style={{
        color: `${theme ? "#333" : "#fff"}`,
        userSelect: "none",
        fontWeight: "bold",
        display: "flex",
        flexDirection: "column",
        gap: `${width < 450 ? "1.3rem" : "0"}`,
      }}
    >
      {width < 900 ? (
        <div style={{ fontSize: `${width < 450 ? "1.3rem" : "1.6rem"}`, overflow: "hidden" }}>
          Invoices
          <span style={sortArrowStyle} onClick={() => setSortInvoice((prev) => (prev === "descending" ? "ascending" : "descending"))}>
            {sortInvoice === "descending" ? <AiOutlineArrowDown /> : <AiOutlineArrowUp />}
          </span>
        </div>
      ) : (
        <div style={{ fontSize: "2rem", userSelect: "none", overflow: "hidden" }}>
          Invoices
          <span style={sortArrowStyle} onClick={() => setSortInvoice((prev) => (prev === "descending" ? "ascending" : "descending"))}>
            {sortInvoice === "descending" ? <AiOutlineArrowDown /> : <AiOutlineArrowUp />}
          </span>
        </div>
      )}
      <span style={{ fontSize: "1rem" }}>{width < 900 ? `${invoiceLength} Invoices` : `There are ${invoiceLength} total Invoices`}</span>
    </div>
  );
}

const sortArrowStyle = {
  fontSize: "1.5rem",
  cursor: "pointer",
  marginLeft: "10px",
  position: "relative",
  top: ".3rem",
};

export default HomePageTitle;
