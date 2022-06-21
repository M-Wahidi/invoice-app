import React from "react";
import { useState } from "react";

function ScrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div style={{ position: "fixed", bottom: "50px", right: "50px", zIndex: "2" }}>
      <button>Top</button>
    </div>
  );
}

export default ScrollToTop;
