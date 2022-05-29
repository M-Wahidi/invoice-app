import React from "react";
import useWindowDimensions from "../../CustomHooks/useWindowDimensions";
import { ThemeFunc } from "../../Context/ThemeContext";

function HomePageTitle() {
  const { width } = useWindowDimensions();
  const { theme } = ThemeFunc();

  return (
    <div style={{ color: `${theme ? "#333" : "#fff"}`, fontWeight: "bold" }}>
      {width < 900 ? (
        <div style={{ fontSize: "1.4rem" }}>Invoices</div>
      ) : (
        <div style={{ fontSize: "2rem" }}>Invoices</div>
      )}
      <span style={{ fontSize: ".8rem" }}>
        {width < 900 ? "7 Invoices" : "There are 7 total Invoices"}{" "}
      </span>
    </div>
  );
}

export default HomePageTitle;
