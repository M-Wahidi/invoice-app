import React from "react";

function Overlay() {
  return (
    <div
      style={{
        position: "fixed",
        width: "100vw",
        height: "100vh",
        left: 0,
        top: 0,
        background: "rgba(0,0,0,0.5)",
        zIndex: 2,
        overflow: "hidden",
      }}
    ></div>
  );
}

export default Overlay;
