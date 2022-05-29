import React from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { ThemeFunc } from "../../Context/ThemeContext";

function Theme() {
  const { theme, switchTheme } = ThemeFunc();
  return (
    <button
      style={{
        color: "#fff",
        fontSize: "1.4rem",
        border: "none",
        background: "transparent",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
      }}
      onClick={switchTheme}
    >
      {theme ? (
        <span style={{ color: "gray", display: "flex", alignItems: "center" }}>
          <MdDarkMode />
        </span>
      ) : (
        <span style={{ color: "gray", display: "flex", alignItems: "center" }}>
          <MdLightMode />
        </span>
      )}
    </button>
  );
}

export default Theme;
