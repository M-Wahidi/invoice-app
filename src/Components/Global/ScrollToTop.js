import React from "react";
import { useState, useEffect } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
function ScrollToTop() {
  const [scrollHeight, setScrollHeight] = useState(0);

  const handleScroll = () => {
    return window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const getWindowScroll = () => {
      setScrollHeight(window.scrollY);
    };
    window.addEventListener("scroll", getWindowScroll);
    return () => window.removeEventListener("scroll", getWindowScroll);
  }, []);

  return (
    <>
      {scrollHeight > 300 && (
        <div style={{ position: "fixed", bottom: "20px", right: "20px", zIndex: "2", height: "50px", width: "50px" }}>
          <button
            onClick={handleScroll}
            style={{
              border: "none",
              height: "100%",
              width: "100%",
              borderRadius: "50%",
              fontSize: "1.6rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#7c5df9",
              color: "#fff",
              cursor: "pointer",
            }}
          >
            <AiOutlineArrowUp />
          </button>
        </div>
      )}
    </>
  );
}

export default ScrollToTop;
