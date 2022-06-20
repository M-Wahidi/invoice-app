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
      }}
    >
      {width < 900 ? (
        <div style={{ fontSize: "1.4rem", overflow: "hidden" }}>
          Invoices
          <span
            style={sortArrowStyle}
            onClick={() =>
              setSortInvoice((prev) =>
                prev === "descending" ? "ascending" : "descending"
              )
            }
          >
            {sortInvoice === "descending" ? (
              <AiOutlineArrowDown />
            ) : (
              <AiOutlineArrowUp />
            )}
          </span>
        </div>
      ) : (
        <div
          style={{ fontSize: "2rem", userSelect: "none", overflow: "hidden" }}
        >
          Invoices
          <span
            style={sortArrowStyle}
            onClick={() =>
              setSortInvoice((prev) =>
                prev === "descending" ? "ascending" : "descending"
              )
            }
          >
            {sortInvoice === "descending" ? (
              <AiOutlineArrowDown />
            ) : (
              <AiOutlineArrowUp />
            )}
          </span>
        </div>
      )}
      <span style={{ fontSize: ".8rem" }}>
        {width < 900
          ? `${invoiceLength} Invoices`
          : `There are ${invoiceLength} total Invoices`}
      </span>
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
