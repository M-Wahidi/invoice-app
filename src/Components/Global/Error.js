import React from "react";

function Error({ text, position }) {
  return (
    <div
      style={{
        padding: "1rem",
        textAlign: "center",
        position: "fixed",
        right: "0",
        bottom: position,
        background: "#dba9b7",
        transition: "all 0.2s ease-in-out",
      }}
    >
      <h4>{text}</h4>
    </div>
  );
}

export default Error;
